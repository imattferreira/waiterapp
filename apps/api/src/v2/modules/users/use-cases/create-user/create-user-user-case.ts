import type { HttpBodyResponse } from "../../../../infra/http/interfaces";
import User, { AccountRoles } from "../../entities/User";
import userPresentation, {
  IUserPresentation,
} from "../../presentations/user-presentation";
import type { IUsersRepository } from "../../repositories/interfaces";
import crypto from "../../utils/crypto";
import validate from "../../utils/validate";

export interface ICreateUserUseCaseInput {
  name: string;
  email: string;
  password: string;
  role?: AccountRoles;
}

type CreateUserUseCaseOutput = HttpBodyResponse<{
  user: IUserPresentation;
}>;

class CreateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(
    input: ICreateUserUseCaseInput
  ): Promise<CreateUserUseCaseOutput> {
    // TODO improve initial validations
    if (
      !validate.requiredFields<ICreateUserUseCaseInput>(
        ["name", "email", "password"],
        input
      )
    ) {
      // TODO improve error messages
      throw new Error("some required fields are missing");
    }

    const { email, name, password, role } = input;

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error("[email] already exists");
    }

    const passwordHashed = await crypto.hash(password);

    const user = new User({
      email,
      name,
      password: passwordHashed,
      role,
    });

    await this.usersRepository.create(user);

    return {
      _self: null,
      data: {
        user: userPresentation(user),
      },
    };
  }
}

export default CreateUserUseCase;

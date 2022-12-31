import type { HttpBodyResponse } from "../../../../infra/http/interfaces";
import type { AccountRoles } from "../../entities/User";
import userPresentation, {
  IUserPresentation,
} from "../../presentations/user-presentation";
import type { IUsersRepository } from "../../repositories/interfaces";
import crypto from "../../utils/crypto";
import { isFieldsRequired, isUUIDValid } from "../../utils/validations";

export interface IUpdateUserUseCaseInput {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: AccountRoles;
}

type UpdateUserUseCaseOutput = HttpBodyResponse<{
  user: IUserPresentation;
}>;

class UpdateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(
    input: IUpdateUserUseCaseInput
  ): Promise<UpdateUserUseCaseOutput> {
    // TODO improve initial validations
    if (
      !isFieldsRequired<IUpdateUserUseCaseInput>(
        ["id", "name", "email", "password"],
        input
      )
    ) {
      // TODO improve error messages
      throw new Error("some required fields are missing");
    }

    const { id, email, name, password, role } = input;

    if (!isUUIDValid(id)) {
      throw new Error("[id] is invalid");
    }

    const existingUser = await this.usersRepository.findById(id);

    if (!existingUser) {
      throw new Error("user not found");
    }

    if (existingUser.email !== email) {
      const emailAlreadyExists = await this.usersRepository.findByEmail(email);

      if (emailAlreadyExists) {
        throw new Error("[email] already exists");
      }
    }

    const passwordHashed = await crypto.hash(password);

    existingUser.email = email;
    existingUser.password = passwordHashed;

    if (role) {
      existingUser.role = role;
    }

    await this.usersRepository.update(existingUser);

    return {
      _self: null,
      data: {
        user: userPresentation(existingUser),
      },
    };
  }
}

export default UpdateUserUseCase;

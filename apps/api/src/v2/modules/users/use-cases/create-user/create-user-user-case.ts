import User, { AccountRoles } from "../../entities/User";
import userPresentation from "../../presentations/user-presentation";
import type { IUsersRepository } from "../../repositories/interfaces";
import { isFieldsRequired } from "../../utils/validations";

export interface ICreateUserUseCaseInput {
  name: string;
  email: string;
  password: string;
  role?: AccountRoles;
}

class CreateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(input: ICreateUserUseCaseInput) {
    // TODO improve initial validations
    if (
      !isFieldsRequired<ICreateUserUseCaseInput>(
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

    const user = new User({
      email,
      name,
      password,
      role,
    });

    await this.usersRepository.create(user);

    return {
      data: {
        user: userPresentation(user),
      },
    };
  }
}

export default CreateUserUseCase;

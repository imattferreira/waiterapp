import AppError from "@/errors/app-error";
import Either, { Left, Right } from "@/errors/either";
import type { HttpBodyResponse } from "@/infra/http/interfaces";
import crypto from "@/utils/crypto";
import validate from "@/utils/validate";

import User, { AccountRoles } from "../../entities/user";
import type { IUsersRepository } from "../../infra/repositories/interfaces";
import userPresentation, {
  IUserPresentation,
} from "../../presentations/user-presentation";

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
  ): Promise<Either<AppError, CreateUserUseCaseOutput>> {
    if (
      !validate.requiredFields<ICreateUserUseCaseInput>(
        ["name", "email", "password"],
        input
      )
    ) {
      return Left.commit(
        new AppError("bad_request", "some required fields are missing")
      );
    }

    const { email, name, password, role } = input;

    const passwordHash = await crypto.hash(password);

    const user = new User({
      email,
      name,
      password: { hash: passwordHash, plaintext: password },
      role,
    });

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      return Left.commit(new AppError("conflict", "[email] already exists"));
    }

    await this.usersRepository.create(user);

    return Right.commit({
      _self: null,
      data: {
        user: userPresentation(user),
      },
    });
  }
}

export default CreateUserUseCase;

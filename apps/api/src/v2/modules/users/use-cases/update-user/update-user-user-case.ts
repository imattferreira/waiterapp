import AppError from "@/errors/app-error";
import Either, { Left, Right } from "@/errors/either";
import crypto from "@/utils/crypto";
import validate from "@/utils/validate";

import type { AccountRoles } from "../../entities/user";
import type { IUsersRepository } from "../../infra/repositories/interfaces";

export interface IUpdateUserUseCaseInput {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: AccountRoles;
}

class UpdateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(
    input: IUpdateUserUseCaseInput
  ): Promise<Either<AppError, null>> {
    if (
      !validate.requiredFields<IUpdateUserUseCaseInput>(
        ["id", "name", "email", "password"],
        input
      )
    ) {
      return Left.commit(
        new AppError("bad_request", "some required fields are missing")
      );
    }

    const { id, email, name, password, role } = input;

    if (!validate.uuidV4(id)) {
      return Left.commit(new AppError("bad_request", "[id] is invalid"));
    }

    const existingUser = await this.usersRepository.findById(id);

    if (!existingUser) {
      return Left.commit(new AppError("not_found", "user not found"));
    }

    if (existingUser.email !== email) {
      const emailAlreadyExists = await this.usersRepository.findByEmail(email);

      if (emailAlreadyExists) {
        return Left.commit(new AppError("conflict", "[email] already exists"));
      }
    }

    const passwordHash = await crypto.hash(password);

    existingUser.name = name;
    existingUser.email = email;
    existingUser.password = { hash: passwordHash, plaintext: password };

    if (role) {
      existingUser.role = role;
    }

    await this.usersRepository.update(existingUser);

    return Right.commit(null);
  }
}

export default UpdateUserUseCase;

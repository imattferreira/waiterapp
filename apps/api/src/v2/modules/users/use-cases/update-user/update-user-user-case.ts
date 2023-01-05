import AppError from "../../../../errors/AppError";
import Either, { Left, Right } from "../../../../errors/either";
import type { HttpBodyResponse } from "../../../../infra/http/interfaces";
import type { AccountRoles } from "../../entities/User";
import userPresentation, {
  IUserPresentation,
} from "../../presentations/user-presentation";
import type { IUsersRepository } from "../../infra/repositories/interfaces";
import crypto from "../../utils/crypto";
import validate from "../../utils/validate";

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
  ): Promise<Either<AppError, UpdateUserUseCaseOutput>> {
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

    return Right.commit({
      _self: null,
      data: {
        user: userPresentation(existingUser),
      },
    });
  }
}

export default UpdateUserUseCase;

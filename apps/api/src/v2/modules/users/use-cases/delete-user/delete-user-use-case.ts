import AppError from "../../../../errors/app-error";
import Either, { Left, Right } from "../../../../errors/either";
import { IUsersRepository } from "../../infra/repositories/interfaces";
import validate from "../../utils/validate";

interface DeleteUserUseCaseInput {
  id: string;
}

class DeleteUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    id,
  }: DeleteUserUseCaseInput): Promise<Either<AppError, null>> {
    if (!validate.uuidV4(id)) {
      Left.commit(new AppError("bad_request", "invalid [id] param"));
    }

    await this.usersRepository.delete(id);
    return Right.commit(null);
  }
}

export default DeleteUserUseCase;

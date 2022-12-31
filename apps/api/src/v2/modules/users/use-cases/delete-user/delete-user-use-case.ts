import { IUsersRepository } from "../../repositories/interfaces";
import validate from "../../utils/validate";

interface DeleteUserUseCaseInput {
  id: string;
}

class DeleteUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({ id }: DeleteUserUseCaseInput): Promise<void> {
    if (!validate.uuid(id)) {
      throw new Error("invalid [id] param");
    }

    await this.usersRepository.delete(id);
  }
}

export default DeleteUserUseCase;

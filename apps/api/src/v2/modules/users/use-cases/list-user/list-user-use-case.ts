import userPresentation from "../../presentations/user-presentation";
import { IUsersRepository } from "../../repositories/interfaces";
import { isUUIDValid } from "../../utils/validations";

interface ListUserUseCaseInput {
  id: string;
}

class ListUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({ id }: ListUserUseCaseInput) {
    if (!isUUIDValid(id)) {
      throw new Error("invalid [id] param");
    }

    const user = await this.usersRepository.findById(id);

    return { data: { user: user ? userPresentation(user) : null } };
  }
}

export default ListUserUseCase;

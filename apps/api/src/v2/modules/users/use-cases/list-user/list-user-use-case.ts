import type { HttpBodyResponse } from "../../../../infra/http/interfaces";
import userPresentation, {
  IUserPresentation,
} from "../../presentations/user-presentation";
import { IUsersRepository } from "../../repositories/interfaces";
import validate from "../../utils/validate";

interface ListUserUseCaseInput {
  id: string;
}

type ListUserUseCaseOutput = HttpBodyResponse<{
  user: IUserPresentation;
}>;

class ListUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({ id }: ListUserUseCaseInput): Promise<ListUserUseCaseOutput> {
    if (!validate.uuid(id)) {
      throw new Error("invalid [id] param");
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error("user not found");
    }

    return {
      _self: null,
      data: { user: userPresentation(user) },
    };
  }
}

export default ListUserUseCase;

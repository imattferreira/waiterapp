import type { HttpBodyResponse } from "@/infra/http/interfaces";

import { IUsersRepository } from "../../infra/repositories/interfaces";
import userPresentation, {
  IUserPresentation,
} from "../../presentations/user-presentation";

type ListUsersUseCaseOutput = HttpBodyResponse<{
  users: IUserPresentation[];
}>;

class ListUsersUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(): Promise<ListUsersUseCaseOutput> {
    // TODO implement pagination, limit, order, ...
    const users = await this.usersRepository.listAll();

    return { _self: null, data: { users: users.map(userPresentation) } };
  }
}

export default ListUsersUseCase;

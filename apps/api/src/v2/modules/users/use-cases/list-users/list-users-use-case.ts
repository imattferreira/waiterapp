import type { HttpBodyResponse } from "../../../../infra/http/interfaces";
import userPresentation, { IUserPresentation } from "../../presentations/user-presentation";
import { IUsersRepository } from "../../repositories/interfaces";

type ListUsersUseCaseOutput = HttpBodyResponse<{
  users: IUserPresentation[]
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

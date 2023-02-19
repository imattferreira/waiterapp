import type {
  HttpRequest,
  HttpResponse,
} from "@/infra/http/interfaces";

import ListUsersUseCase from "./list-users-use-case";

class ListUsersController {
  constructor(private readonly listUsersUseCase: ListUsersUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse) {
    const result = await this.listUsersUseCase.execute();

    return res.send(result);
  }
}

export default ListUsersController;

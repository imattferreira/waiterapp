import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import ListUserUseCase from "./list-user-use-case";

class ListUserController {
  constructor(private readonly listUserUseCase: ListUserUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as { id: string };

    const result = await this.listUserUseCase.execute({ id });

    return res.send(result);
  }
}

export default ListUserController;

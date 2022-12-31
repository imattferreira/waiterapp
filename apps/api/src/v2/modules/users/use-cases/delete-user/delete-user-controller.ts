import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import STATUS_CODES from "../../../../infra/http/status-codes";
import DeleteUserUseCase from "./delete-user-use-case";

class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as { id: string };

    await this.deleteUserUseCase.execute({ id });

    return res.status(STATUS_CODES.NO_CONTENT).send();
  }
}

export default DeleteUserController;

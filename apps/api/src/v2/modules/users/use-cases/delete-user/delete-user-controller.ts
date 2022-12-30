import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import DeleteUserUseCase from "./delete-user-use-case";

class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as { id: string };

    await this.deleteUserUseCase.execute({ id });

    return res.status(204).send();
  }
}

export default DeleteUserController;

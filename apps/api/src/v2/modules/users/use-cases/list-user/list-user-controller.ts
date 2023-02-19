import InternalError from "@/errors/internal-error";
import type { HttpRequest, HttpResponse } from "@/infra/http/interfaces";

import ListUserUseCase from "./list-user-use-case";

class ListUserController {
  constructor(private readonly listUserUseCase: ListUserUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as { id: string };

    const result = await this.listUserUseCase.execute({ id });

    if (result.isLeft()) {
      return res.status(result.error.status).send(result.error.body);
    }

    if (result.isRight()) {
      return res.send(result.value);
    }
    const internalError = new InternalError();

    return res.status(internalError.status).send(internalError.body);
  }
}

export default ListUserController;

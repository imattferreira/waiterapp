import InternalError from "../../../../errors/InternalError";
import { HttpRequest, HttpResponse } from "../../../../infra/http/interfaces";
import STATUS_CODES from "../../../../infra/http/status-codes";
import UpdateUserUseCase, {
  IUpdateUserUseCaseInput,
} from "./update-user-user-case";

class UpdateUserController {
  constructor(private readonly useCase: UpdateUserUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse) {
    const { id } = req.params as { id: string };
    const { email, name, password, role } = req.body as Omit<
      IUpdateUserUseCaseInput,
      "id"
    >;

    const result = await this.useCase.execute({
      id,
      email,
      name,
      password,
      role,
    });

    if (result.isLeft()) {
      return res.status(result.error.status).send(result.error.body);
    }

    if (result.isRight()) {
      return res.status(STATUS_CODES.CREATED).send(result.value);
    }

    const internalError = new InternalError();

    return res.status(internalError.status).send(internalError.body);
  }
}

export default UpdateUserController;

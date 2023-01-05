import InternalError from "../../../../errors/internal-error";
import { HttpRequest, HttpResponse } from "../../../../infra/http/interfaces";
import STATUS_CODES from "../../../../infra/http/status-codes";
import CreateUserUseCase, {
  ICreateUserUseCaseInput,
} from "./create-user-user-case";

class CreateUserController {
  constructor(private readonly useCase: CreateUserUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const { email, name, password, role } = req.body as ICreateUserUseCaseInput;

    const result = await this.useCase.execute({
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

export default CreateUserController;

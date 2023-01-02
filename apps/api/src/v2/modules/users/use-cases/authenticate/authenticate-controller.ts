import InternalError from "../../../../errors/InternalError";
import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import STATUS_CODES from "../../../../infra/http/status-codes";
import AuthenticateUseCase, {
  AuthenticateUseCaseInput,
} from "./authenticate-use-case";

class AuthenticateController {
  constructor(private readonly authenticateUseCase: AuthenticateUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const { email, password } = req.body as AuthenticateUseCaseInput;

    const result = await this.authenticateUseCase.execute({ email, password });

    if (result.isLeft()) {
      return res.status(result.error.status).send(result.error.body);
    }

    if (result.isRight()) {
      return res.status(STATUS_CODES.OK).send(result.value);
    }

    const internalError = new InternalError();

    return res.status(internalError.status).send(internalError.body);
  }
}

export default AuthenticateController;

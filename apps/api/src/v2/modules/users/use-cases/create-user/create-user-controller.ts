import { HttpRequest, HttpResponse } from "../../../../infra/http/interfaces";
import STATUS_CODES from "../../../../infra/http/status-codes";
import CreateUserUseCase, {
  ICreateUserUseCaseInput,
} from "./create-user-user-case";

class CreateUserController {
  constructor(private readonly useCase: CreateUserUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse) {
    const { email, name, password, role } = req.body as ICreateUserUseCaseInput;

    const result = await this.useCase.execute({
      email,
      name,
      password,
      role,
    });

    return res.status(STATUS_CODES.CREATED).send(result);
  }
}

export default CreateUserController;

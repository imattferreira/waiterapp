import { HttpRequest, HttpResponse } from "../../../../infra/http/interfaces";
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

    return res.status(201).send(result);
  }
}

export default UpdateUserController;

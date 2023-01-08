import InternalError from "../../../../errors/internal-error";
import { HttpRequest, HttpResponse } from "../../../../infra/http/interfaces";
import STATUS_CODES from "../../../../infra/http/status-codes";
import CreateImageUseCase from "./create-image-user-case";

class CreateImageController {
  constructor(private readonly useCase: CreateImageUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const file = await req.file({ limits: { fileSize: 1.2 * 10 ** 7 } });

    const result = await this.useCase.execute({
      file,
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

export default CreateImageController;

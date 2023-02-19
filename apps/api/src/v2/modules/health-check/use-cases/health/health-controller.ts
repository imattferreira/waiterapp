import InternalError from "@/errors/internal-error";
import type { HttpRequest, HttpResponse } from "@/infra/http/interfaces";

import HealthUseCase from "./health-use-case";

class HealthController {
  constructor(private readonly healthUseCase: HealthUseCase) {}

  async handle(req: HttpRequest, res: HttpResponse) {
    const result = await this.healthUseCase.execute();

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

export default HealthController;

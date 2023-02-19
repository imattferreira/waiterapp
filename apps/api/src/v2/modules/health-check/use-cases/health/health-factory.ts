import type {
  HttpRequest,
  HttpResponse,
} from "@/infra/http/interfaces";

import HealthController from "./health-controller";
import HealthUseCase from "./health-use-case";

function healthFactory(req: HttpRequest, res: HttpResponse) {
  const useCase = new HealthUseCase();
  const controller = new HealthController(useCase);

  return controller.handle(req, res);
}

export default healthFactory;

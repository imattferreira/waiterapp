import type {
  HttpRequest,
  HttpResponse,
} from "@/infra/http/interfaces";
import STATUS_CODES from "@/infra/http/status-codes";

class PingController {
  constructor() {}

  async handle(req: HttpRequest, res: HttpResponse) {
    return res.status(STATUS_CODES.OK).send();
  }
}

export default PingController;

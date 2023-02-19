import type {
  HttpRequest,
  HttpResponse,
} from "@/infra/http/interfaces";

import PingController from "./ping-controller";

function pingFactory(req: HttpRequest, res: HttpResponse) {
  const controller = new PingController();

  return controller.handle(req, res);
}

export default pingFactory;

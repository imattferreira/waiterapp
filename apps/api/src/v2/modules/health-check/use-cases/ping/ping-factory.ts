import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import PingController from "./ping-controller";

function listUserFactory(req: HttpRequest, res: HttpResponse) {
  const controller = new PingController();

  return controller.handle(req, res);
}

export default listUserFactory;

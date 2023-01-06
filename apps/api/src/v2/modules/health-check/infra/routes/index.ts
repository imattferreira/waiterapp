import type { Router } from "../../../../infra/http/interfaces";
import ping from "../../use-cases/ping";
import docs from "../docs";

function routes(router: Router) {
  router.get("/ping", docs.ping, ping.factory);
}

export default routes;

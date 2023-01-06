import type { Router } from "../../../../infra/http/interfaces";
import health from "../../use-cases/health";
import ping from "../../use-cases/ping";
import docs from "../docs";

function routes(router: Router) {
  router.get("/ping", docs.ping, ping.factory);
  router.get("/health", docs.health, health.factory);
}

export default routes;

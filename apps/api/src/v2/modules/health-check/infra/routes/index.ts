import accessControl from "@/infra/http/middlewares/access-control";
import type { RouteModule } from "@/infra/http/routes/interfaces";

import health from "../../use-cases/health";
import ping from "../../use-cases/ping";
import docs from "../docs";

const routes: RouteModule = {
  routes: [
    {
      path: "/ping",
      method: "GET",
      docs: docs.ping,
      middlewares: [accessControl("admin")],
      handler: ping.factory,
    },
    {
      path: "/health",
      method: "GET",
      docs: docs.health,
      middlewares: [accessControl("admin")],
      handler: health.factory,
    },
  ],
};

export default routes;

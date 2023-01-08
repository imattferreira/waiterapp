import type { DoneFn, Router } from "./interfaces";
import usersRoutes from "../../modules/users/infra/routes";
import healthCheckRoutes from "../../modules/health-check/infra/routes";
import imagesRoutes from "../../modules/images/infra/routes";

function routes(router: Router, _: any, done: DoneFn) {
  usersRoutes(router);
  healthCheckRoutes(router);
  imagesRoutes(router);

  done();
}

export default routes;

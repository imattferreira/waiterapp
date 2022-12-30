import type { DoneFn, Router } from "./interfaces";
import usersRoutes from "../../modules/users/routes";

function routes(router: Router, _: any, done: DoneFn) {
  usersRoutes(router);

  done();
}

export default routes;

import type { Router } from "../../../../infra/http/interfaces";
import createImage from "../../use-cases/create-image";

function routes(router: Router) {
  router.post("/images", createImage.factory);
  // router.post("/images", configure([withMiddlewares([accessControl()]), docs.createImage]), createImage.factory);
}

export default routes;

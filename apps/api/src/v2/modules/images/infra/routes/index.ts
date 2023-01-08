import type { RouteModule } from "../../../../infra/http/routes/interfaces";
import createImage from "../../use-cases/create-image";

const routes: RouteModule = {
  routes: [
    {
      path: "/images",
      method: "POST",
      // docs:
      // middlewares: [],
      handler: createImage.factory,
    },
  ],
};

export default routes;

import uploader from "../../../../infra/http/middlewares/uploader";
import type { RouteModule } from "../../../../infra/http/routes/interfaces";
import createImage from "../../use-cases/create-image";

const routes: RouteModule = {
  routes: [
    {
      path: "/images",
      method: "POST",
      // docs:
      middlewares: [uploader({ tmp: true, fieldname: "image" })],
      handler: createImage.factory,
    },
  ],
};

export default routes;

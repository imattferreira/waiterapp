import type { Router } from "../../../../infra/http/interfaces";
import createUser from "../../use-cases/create-user";
import deleteUser from "../../use-cases/delete-user";
import listUser from "../../use-cases/list-user";
import listUsers from "../../use-cases/list-users";
import updateUser from "../../use-cases/update-user";
import authenticate from "../../use-cases/authenticate";
import docs from "../docs";
import accessControl from "../../../../infra/http/middlewares/access-control";
import withMiddlewares from "../../../../infra/http/middlewares/with-middlewares";

function routes(router: Router) {
  router.post("/users", docs.createUser, createUser.factory);
  router.get(
    "/users",
    { ...withMiddlewares(accessControl("admin")), ...docs.listUsers },
    listUsers.factory
  );
  router.get("/users/:id", docs.listUser, listUser.factory);
  router.put("/users/:id", docs.updateUser, updateUser.factory);
  router.delete("/users/:id", docs.deleteUser, deleteUser.factory);

  router.post("/auth", docs.authenticate, authenticate.factory);
  // router.post('/refresh', () => {});
  // router.post('/forgot-password', () => {});
  // router.post('/reset', () => {});
}

export default routes;

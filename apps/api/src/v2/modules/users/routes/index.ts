import type { Router } from "../../../infra/http/interfaces";
import createUser from "../use-cases/create-user";
import deleteUser from "../use-cases/delete-user";
import listUser from "../use-cases/list-user";
import listUsers from "../use-cases/list-users";
import updateUser from "../use-cases/update-user";
import authenticate from "../use-cases/authenticate";

function routes(router: Router) {
  router.post("/users", createUser.factory);
  router.get("/users", listUsers.factory);
  router.get("/users/:id", listUser.factory);
  router.put("/users/:id", updateUser.factory);
  router.delete("/users/:id", deleteUser.factory);

  router.post("/auth", authenticate.factory);
  // router.post('/refresh', () => {});
  // router.post('/forgot-password', () => {});
  // router.post('/reset', () => {});
}

export default routes;

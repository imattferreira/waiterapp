import type { Router } from "../../../infra/http/interfaces";
import CreateUser from "../use-cases/create-user";

function routes(router: Router) {
  router.post("/users", CreateUser.factory);
  // router.get('/users', () => {});
  // router.get('/users/:id', () => {});
  // router.put('/users/:id', () => {});
  // router.patch('/users/:id', () => {});
  // router.delete('/users/:id', () => {});

  // router.post('/auth', () => {});
  // router.post('/refresh', () => {});
  // router.post('/forgot-password', () => {});
  // router.post('/reset', () => {});
}

export default routes;

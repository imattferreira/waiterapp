import accessControl from "../../../../infra/http/middlewares/access-control";
import type { RouteModule } from "../../../../infra/http/routes/interfaces";
import authenticate from "../../use-cases/authenticate";
import createUser from "../../use-cases/create-user";
import deleteUser from "../../use-cases/delete-user";
import listUser from "../../use-cases/list-user";
import listUsers from "../../use-cases/list-users";
import updateUser from "../../use-cases/update-user";
import docs from "../docs";

const routes: RouteModule = {
  routes: [
    {
      path: "/users",
      method: "POST",
      docs: docs.createUser,
      handler: createUser.factory,
    },
    {
      path: "/users",
      method: "GET",
      docs: docs.listUsers,
      middlewares: [accessControl("admin")],
      handler: listUsers.factory,
    },
    {
      path: "/users/:id",
      method: "GET",
      docs: docs.listUser,
      middlewares: [accessControl()],
      handler: listUser.factory,
    },
    {
      path: "/users/:id",
      method: "PUT",
      docs: docs.updateUser,
      middlewares: [accessControl()],
      handler: updateUser.factory,
    },
    {
      path: "/users/:id",
      method: "DELETE",
      docs: docs.deleteUser,
      middlewares: [accessControl()],
      handler: deleteUser.factory,
    },
    {
      path: "/auth",
      method: "POST",
      docs: docs.authenticate,
      handler: authenticate.factory,
    },
    // {
    //   path: '/refresh',
    //   method: 'POST',
    //   docs: docs.authenticate,
    //   handler: authenticate.factory,
    // },
    // {
    //   path: '/forgot-password',
    //   method: 'POST',
    //   docs: docs.authenticate,
    //   handler: authenticate.factory,
    // },
    // {
    //   path: '/reset',
    //   method: 'POST',
    //   docs: docs.authenticate,
    //   handler: authenticate.factory,
    // },
  ],
};

export default routes;

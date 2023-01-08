import type { RouteOptions } from "fastify";

import type { DoneFn, Router } from "../interfaces";
import type { RouteModule } from "../routes/interfaces";

function routerAdapter(routeModules: RouteModule[]) {
  const routesToRegister: RouteOptions[] = [];

  for (const { routes, prefix } of routeModules) {
    for (const { handler, method, docs, middlewares, path } of routes) {
      const url = prefix ? `${prefix}${path}` : path;

      routesToRegister.push({
        method,
        url,
        schema: docs,
        preHandler: middlewares,
        handler,
      });
    }
  }

  return (router: Router, _: any, done: DoneFn) => {
    routesToRegister.forEach((route) => {
      router.route(route);
    });

    done();
  };
}

export default routerAdapter;

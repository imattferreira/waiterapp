import type { DoneFn, RouteModule, Router } from "./interfaces";
import path from "node:path";
import fs from "node:fs";

type RouterAdapter = (
  router: Router,
  done: DoneFn,
  routes: RouteModule[]
) => void;

async function routes(adapter: RouterAdapter) {
  const modules = fs.readdirSync(
    path.resolve(__dirname, "..", "..", "modules")
  );
  const routes: RouteModule[] = [];

  const modulesWithRoutes = modules.filter((name) =>
    fs.existsSync(
      path.resolve(__dirname, "..", "..", "modules", name, "infra", "routes")
    )
  );

  for (const name of modulesWithRoutes) {
    const moduleRoutes = (await import(`../../modules/${name}/infra/routes`))
      .default;

    routes.push(moduleRoutes);
  }

  return (router: Router, _: any, done: DoneFn) => {
    adapter(router, done, routes);
  };
}

export default routes;

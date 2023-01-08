import type { RouteModule, RouterAdapter } from "./interfaces";
import path from "../../../utils/path";
import fs from "../../../utils/fs";

const MODULE_DIR = path.resolve(__dirname, "..", "..", "..", "modules");

async function routes(adapter: RouterAdapter) {
  const modules = fs.readdir(MODULE_DIR);
  const routes: RouteModule[] = [];

  const modulesWithRoutes = modules.filter((name) =>
    fs.exists(path.resolve(MODULE_DIR, name, "infra", "routes"))
  );

  for (const name of modulesWithRoutes) {
    const moduleRoutes = (await import(`${MODULE_DIR}/${name}/infra/routes`))
      .default;

    routes.push(moduleRoutes);
  }

  return adapter(routes);
}

export default routes;

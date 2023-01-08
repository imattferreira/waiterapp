import type { RouteModule, RouterAdapter } from "./interfaces";
import path from "node:path";
import fs from "node:fs";

async function routes(adapter: RouterAdapter) {
  const modules = fs.readdirSync(
    path.resolve(__dirname, "..", "..", "..", "modules")
  );
  const routes: RouteModule[] = [];

  const modulesWithRoutes = modules.filter((name) =>
    fs.existsSync(
      path.resolve(
        __dirname,
        "..",
        "..",
        "..",
        "modules",
        name,
        "infra",
        "routes"
      )
    )
  );

  for (const name of modulesWithRoutes) {
    const moduleRoutes = (await import(`../../../modules/${name}/infra/routes`))
      .default;

    routes.push(moduleRoutes);
  }

  return adapter(routes);
}

export default routes;

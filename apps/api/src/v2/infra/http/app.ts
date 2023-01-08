import routesV1 from "../../../v1/routes";
import routerAdapter from "./adapters/router";
import type { ServerInstance } from "./interfaces";
import cors from "./middlewares/cors";
import docs from "./middlewares/docs";
import helmet from "./middlewares/helmet";
import multipart from "./middlewares/multipart";
import rateLimit from "./middlewares/rate-limit";
import routerV2 from "./routes";

const PORT = 3000;
const MIDDLEWARES = [helmet, cors, rateLimit, multipart, docs];

class App {
  constructor(private readonly server: ServerInstance) {}

  private async routes() {
    const routesV2 = await routerV2(routerAdapter);

    this.server.register(routesV1, { prefix: "/v1" });
    this.server.register(routesV2, { prefix: "/v2" });
  }

  private middlewares() {
    MIDDLEWARES.forEach((middleware) => middleware.register(this.server));
  }

  async setup() {
    this.middlewares();
    await this.routes();
  }

  listen() {
    this.server.listen({ port: PORT }, console.error);
  }
}

export default App;

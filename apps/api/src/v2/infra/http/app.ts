import fastify, { FastifyInstance } from "fastify";
import helmet from "@fastify/helmet";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import multipart from "@fastify/multipart";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import routerV2 from "./routes";
import routesV1 from "../../../v1/routes";
import routerAdapter from "./adapters/router";

const PORT = 3000;

class App {
  private server: FastifyInstance;

  constructor() {
    this.server = fastify();
  }

  private async routes() {
    const routesV2 = await routerV2(routerAdapter);

    this.server.register(routesV1, { prefix: "/v1" });
    this.server.register(routesV2, { prefix: "/v2" });
  }

  private async swagger() {
    await this.server.register(swagger);
    await this.server.register(swaggerUI, {
      routePrefix: "/v2/docs",
      uiConfig: {
        docExpansion: "full",
        deepLinking: false,
      },
      staticCSP: true,
      transformSpecificationClone: true,
    });
    this.server.swagger();
  }

  private middlewares() {
    this.server.register(helmet);
    this.server.register(cors, { origin: "http://localhost:5742" });
    this.server.register(rateLimit);
    this.server.register(multipart);
  }

  async setup() {
    this.middlewares();
    await this.swagger();
    await this.routes();
  }

  listen() {
    this.server.listen({ port: PORT }, console.error);
  }
}

export default App;

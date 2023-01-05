import path from "node:path";
import dotenv from "dotenv";
import routesV2 from "./routes";
import routesV1 from "../../../v1/routes";
import fastify, { FastifyInstance } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

const PORT = 3000;

class App {
  private server: FastifyInstance;

  constructor() {
    this.server = fastify();
  }

  private routes() {
    this.server.register(routesV1, { prefix: "/v1" });
    this.server.register(routesV2, { prefix: "/v2" });
  }

  private dotenv() {
    const envFileName =
      process.env.NODE_ENV === "development" ? ".env.dev" : ".env";

    dotenv.config({
      path: path.resolve(__dirname, "..", "infra", "envs", envFileName),
    });
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
      transformStaticCSP: (header) => header,
      transformSpecification: (swaggerObject, request, reply) => {
        return swaggerObject;
      },
      transformSpecificationClone: true,
    });
  }

  async setup() {
    this.dotenv();
    await this.swagger();
    this.routes();
    await this.server.ready();
    this.server.swagger();
  }

  listen() {
    this.server.listen({ port: PORT }, console.error);
  }
}

export default App;

import path from "node:path";
import dotenv from "dotenv";
import fastify, { FastifyInstance } from "fastify";
import helmet from "@fastify/helmet";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import cors from "@fastify/cors";
import rateLimit from '@fastify/rate-limit';
import routesV2 from "./routes";
import routesV1 from "../../../v1/routes";

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
      transformSpecificationClone: true,
    });
  }

  private middlewares() {
    this.server.register(helmet);
    this.server.register(cors, { origin: "http://localhost:5742" });
    this.server.register(rateLimit);
  }

  async setup() {
    this.dotenv();
    this.middlewares();
    await this.swagger();
    this.routes();
    this.server.swagger();
  }

  listen() {
    this.server.listen({ port: PORT }, console.error);
  }
}

export default App;

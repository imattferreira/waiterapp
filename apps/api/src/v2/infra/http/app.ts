import path from "node:path";
import dotenv from "dotenv";
import routesV2 from "./routes";
import routesV1 from "../../../v1/routes";
import fastify, { FastifyInstance } from "fastify";

const PORT = 3000;

class App {
  private server: FastifyInstance;

  constructor() {
    this.server = fastify();
  }

  private register() {
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

  setup() {
    this.register();
    this.dotenv();
  }

  listen() {
    this.server.listen({ port: PORT });
  }
}

export default App;

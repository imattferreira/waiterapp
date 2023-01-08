import fastifyCors from "@fastify/cors";
import type { ServerInstance } from "../interfaces";

const ORIGIN = "http://localhost:5742";

function register(server: ServerInstance) {
  server.register(fastifyCors, { origin: ORIGIN });
}

export default Object.freeze({ register });

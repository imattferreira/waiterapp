import fastifyRateLimit from "@fastify/rate-limit";
import type { ServerInstance } from "../interfaces";

function register(server: ServerInstance) {
  server.register(fastifyRateLimit);
}

export default Object.freeze({ register });

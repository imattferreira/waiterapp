import fastifyMultipart from "@fastify/multipart";

import type { ServerInstance } from "../interfaces";

function register(server: ServerInstance) {
  server.register(fastifyMultipart);
}

export default Object.freeze({ register });

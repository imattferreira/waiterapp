import helmet from "@fastify/helmet";

import type { ServerInstance } from "../interfaces";

function register(server: ServerInstance) {
  server.register(helmet);
}

export default Object.freeze({ register });

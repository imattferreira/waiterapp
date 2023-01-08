import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import type { ServerInstance } from "../interfaces";

const OPTIONS = {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  staticCSP: true,
  transformSpecificationClone: true,
};

function register(server: ServerInstance) {
  server.register(fastifySwagger);
  server.register(fastifySwaggerUi, OPTIONS);
}

export default Object.freeze({ register });

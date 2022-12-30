import Fastify from "fastify";
import mongoose from "mongoose";
import routes from "./v1/routes";
import routesV2 from "./v2/infra/http/routes";

const DATABASE_URL = "mongodb://mongo:docker@localhost:27017";

const app = Fastify();

try {
  mongoose.connect(DATABASE_URL);
} catch {}

app.register(routes, { prefix: "/v1" });
app.register(routesV2, { prefix: "/v2" });

app.listen({ port: 3000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});

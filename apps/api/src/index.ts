import Fastify from "fastify";
import mongoose from "mongoose";
import routes from "./v1/routes";

const DATABASE_URL = "mongodb://mongo:docker@localhost:27017";

const app = Fastify();

try {
  mongoose.connect(DATABASE_URL);
} catch {}

app.register(routes, { prefix: "/v1" });

app.listen({ port: 3000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});

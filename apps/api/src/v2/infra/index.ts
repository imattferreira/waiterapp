import fastify from "fastify";

import database from "./database";
import App from "./http/app";

const server = fastify();

const app = new App(server);

database.connect().then(() => {
  app.setup().then(() => {
    app.listen();
  });
});

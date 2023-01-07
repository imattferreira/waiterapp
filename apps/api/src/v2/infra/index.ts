import database from "./database";
import App from "./http/app";

const app = new App();

database.connect().then(() => {
  app.setup().then(() => {
    app.listen();
  });
});

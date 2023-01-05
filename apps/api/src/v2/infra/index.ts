import database from "./database";
import App from "./http/app";

const app = new App();

database.connect();

app.setup().then(() => {
  app.listen();
});

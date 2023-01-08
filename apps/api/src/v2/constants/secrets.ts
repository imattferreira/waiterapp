import dotenv from "dotenv";

import path from "../utils/path";

const envFileName =
  process.env.NODE_ENV === "development" ? ".env.dev" : ".env";

const { parsed } = dotenv.config({
  path: path.resolve(__dirname, "..", "infra", "envs", envFileName),
});

const SECRETS = {
  AUTH_SECRET: parsed?.AUTH_SECRET as string,
  DATABASE_URL: parsed?.DATABASE_URL as string,
};

export default Object.freeze(SECRETS);

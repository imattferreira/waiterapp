const SECRETS = {
  AUTH_SECRET: process.env.AUTH_SECRET as string,
  DATABASE_URL: process.env.DATABASE_URL as string,
};

export default Object.freeze(SECRETS);

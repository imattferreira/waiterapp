import { MiddlewareFn } from "../interfaces";

function withMiddlewares(middlewares: MiddlewareFn | MiddlewareFn[]) {
  return {
    preHandler: Array.isArray(middlewares) ? middlewares : [middlewares],
  };
}

export default withMiddlewares;

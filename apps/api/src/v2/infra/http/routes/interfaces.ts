import type {
  DocSchema,
  DoneFn,
  HttpMethods,
  HttpRequest,
  HttpResponse,
  MiddlewareFn,
  Router,
} from "../interfaces";

interface Route {
  docs?: DocSchema;
  middlewares?: MiddlewareFn[];
  method: HttpMethods;
  path: string;
  handler: (req: HttpRequest, res: HttpResponse) => Promise<HttpResponse>;
}

export interface RouteModule {
  prefix?: string;
  routes: Route[];
}

export type RouterAdapter = (
  routes: RouteModule[]
) => (router: Router, _: any, done: DoneFn) => void;

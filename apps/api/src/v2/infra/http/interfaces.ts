import type {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
  FastifySchema,
} from "fastify";

export type HttpRequest = FastifyRequest & {
  data?: { id?: string };
};

export type HttpResponse = FastifyReply;

export type Router = FastifyInstance;

// export interface Opts {
//   prefix: string;
// }

export type DoneFn = (err?: Error) => void;

export type DocSchema = { schema: FastifySchema };

export interface HttpBodyResponse<T> {
  _self: {
    // paginate: { }
  } | null;
  data: T;
}

export type MiddlewareFn = (
  req: HttpRequest,
  res: HttpResponse
) => Promise<void> | void;

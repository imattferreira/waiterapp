import type { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";

export type HttpRequest = FastifyRequest;

export type HttpResponse = FastifyReply;

export type Server = FastifyInstance;

export interface Opts {
  prefix: string;
}

export type DoneFn = (err?: Error) => void;

export type RouteRegisterFn = (
  server: Server,
  opts: Opts,
  done: DoneFn
) => void;

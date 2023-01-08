import type { MultipartFile as FastifyMultipartFile } from "@fastify/multipart";
import type {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
  FastifySchema,
  preHandlerHookHandler,
} from "fastify";
import type { Readable } from "node:stream";

export type HttpRequest = FastifyRequest & {
  data?: { id?: string };
};

export type HttpResponse = FastifyReply;

export type ServerInstance = FastifyInstance;

export type Router = ServerInstance;

export type DoneFn = (err?: Error) => void;

export type DocSchema = FastifySchema;

export interface HttpBodyResponse<T> {
  _self: {
    // paginate: { }
  } | null;
  data: T;
}

export type MiddlewareFn =
  | preHandlerHookHandler
  | ((req: HttpRequest, res: HttpResponse) => Promise<void> | void);

export type MultipartFile = FastifyMultipartFile | undefined;

export interface File extends Readable {
  truncated: boolean;
  bytesRead: number;
}

export type HttpMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

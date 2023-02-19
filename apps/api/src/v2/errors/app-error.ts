import STATUS_CODES from "@/infra/http/status-codes";

type ErrorTypes =
  | "bad_request"
  | "unauthorized"
  | "forbidden"
  | "not_found"
  | "conflict"
  | "precondition_failed"
  | "internal";

interface ErrorBody {
  status: STATUS_CODES;
  message: string;
}

class AppError extends Error {
  readonly body: ErrorBody;
  readonly status: STATUS_CODES;

  constructor(readonly type: ErrorTypes, readonly message: string) {
    super(message);

    this.status = STATUS_CODES[type.toUpperCase() as keyof typeof STATUS_CODES];

    this.body = {
      status: this.status,
      message,
    };
  }
}

export default AppError;

import AppError from "./AppError";

class InternalError extends AppError {
  constructor() {
    super("internal", "internal server error");
  }
}

export default InternalError;

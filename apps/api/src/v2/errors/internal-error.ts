import AppError from "./app-error";

class InternalError extends AppError {
  constructor() {
    super("internal", "internal server error");
  }
}

export default InternalError;

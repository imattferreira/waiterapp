import AppError from "./app-error";

class AuthorizationError extends AppError {
  constructor({ role = false, token = false } = {}) {
    const message = role ? "access denied" : "authorization invalid";
    const status = token ? "precondition_failed" : "unauthorized";

    super(status, message);
  }
}

export default AuthorizationError;

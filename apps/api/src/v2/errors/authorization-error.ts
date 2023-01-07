import AppError from "./app-error";

class AuthorizationError extends AppError {
  constructor({role = false} = {}) {
    const message = role ? 'access denied' : 'authorization invalid';

    super("unauthorized", message);
  }
}

export default AuthorizationError;

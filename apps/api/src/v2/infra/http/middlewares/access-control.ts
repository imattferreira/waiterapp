import type { AccountRoles } from "../../../modules/users/entities/User";
import type { HttpRequest, HttpResponse, MiddlewareFn } from "../interfaces";
import crypto from "../../../utils/crypto";
import AuthorizationError from "../../../errors/authorization-error";

interface JwtPayload {
  id: string;
  role: AccountRoles;
}

function accessControl(permittedRoles?: AccountRoles | AccountRoles[]) {
  const middleware: MiddlewareFn = async (
    req: HttpRequest,
    res: HttpResponse
  ) => {
    const { authorization } = req.headers;

    if (!authorization) {
      const error = new AuthorizationError();

      return res.status(error.status).send(error.body);
    }

    try {
      const token = authorization.split(" ")[1];
      const { id, role } = crypto.jwt.decode<JwtPayload>(token);

      if (!id || !role) {
        const error = new AuthorizationError({ token: true });

        return res.status(error.status).send(error.body);
      }

      if (permittedRoles) {
        if (
          typeof permittedRoles === "string" &&
          permittedRoles !== role &&
          !permittedRoles.includes(role)
        ) {
          const error = new AuthorizationError({ role: true, token: true });

          return res.status(error.status).send(error.body);
        }
      }

      req.data = { id };
    } catch {
      const error = new AuthorizationError();

      return res.status(error.status).send(error.body);
    }
  };

  return middleware;
}

export default accessControl;

import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import UsersRepository from "../../repositories/users-repository";
import ListUsersController from "./list-users-controller";
import ListUsersUseCase from "./list-users-use-case";

function listUsersFactory(req: HttpRequest, res: HttpResponse) {
  const usersRepository = new UsersRepository();
  const useCase = new ListUsersUseCase(usersRepository);
  const controller = new ListUsersController(useCase);

  return controller.handle(req, res);
}

export default listUsersFactory;

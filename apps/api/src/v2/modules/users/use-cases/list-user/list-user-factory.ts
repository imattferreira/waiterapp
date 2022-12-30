import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import UsersRepository from "../../repositories/UsersRepository";
import ListUserController from "./list-user-controller";
import ListUserUseCase from "./list-user-use-case";

function listUserFactory(req: HttpRequest, res: HttpResponse) {
  const usersRepository = new UsersRepository();
  const useCase = new ListUserUseCase(usersRepository);
  const controller = new ListUserController(useCase);

  return controller.handle(req, res);
}

export default listUserFactory;

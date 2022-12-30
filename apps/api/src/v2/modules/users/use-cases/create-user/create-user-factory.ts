import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import UsersRepository from "../../repositories/UsersRepository";
import CreateUserController from "./create-user-controller";
import CreateUserUseCase from "./create-user-user-case";

function createUserFactory(req: HttpRequest, res: HttpResponse) {
  const usersRepository = new UsersRepository();
  const useCase = new CreateUserUseCase(usersRepository);
  const controller = new CreateUserController(useCase);

  return controller.handle(req, res);
}

export default createUserFactory;

import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import UsersRepository from "../../repositories/users-repository";
import UpdateUserController from "./update-user-controller";
import UpdateUserUseCase from "./update-user-user-case";

function updateUserFactory(req: HttpRequest, res: HttpResponse) {
  const usersRepository = new UsersRepository();
  const useCase = new UpdateUserUseCase(usersRepository);
  const controller = new UpdateUserController(useCase);

  return controller.handle(req, res);
}

export default updateUserFactory;

import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import UsersRepository from "../../repositories/users-repository";
import DeleteUserController from "./delete-user-controller";
import DeleteUserUseCase from "./delete-user-use-case";

function deleteUserFactory(req: HttpRequest, res: HttpResponse) {
  const usersRepository = new UsersRepository();
  const useCase = new DeleteUserUseCase(usersRepository);
  const controller = new DeleteUserController(useCase);

  return controller.handle(req, res);
}

export default deleteUserFactory;

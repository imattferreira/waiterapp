import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import ImagesRepository from "../../infra/repositories/images-repository";
import CreateImageController from "./create-image-controller";
import CreateImageUseCase from "./create-image-user-case";

function createUserFactory(req: HttpRequest, res: HttpResponse) {
  const usersRepository = new ImagesRepository();
  const useCase = new CreateImageUseCase(usersRepository);
  const controller = new CreateImageController(useCase);

  return controller.handle(req, res);
}

export default createUserFactory;

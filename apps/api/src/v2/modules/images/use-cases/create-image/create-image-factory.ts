import type {
  HttpRequest,
  HttpResponse,
} from "../../../../infra/http/interfaces";
import ImagesRepository from "../../infra/repositories/images-repository";
import ImageTransformJob from "../../jobs/image-transform";
import CreateImageController from "./create-image-controller";
import CreateImageUseCase from "./create-image-user-case";

function createUserFactory(req: HttpRequest, res: HttpResponse) {
  const usersRepository = new ImagesRepository();
  const imageTransformJob = new ImageTransformJob();
  const useCase = new CreateImageUseCase(usersRepository, imageTransformJob);
  const controller = new CreateImageController(useCase);

  return controller.handle(req, res);
}

export default createUserFactory;

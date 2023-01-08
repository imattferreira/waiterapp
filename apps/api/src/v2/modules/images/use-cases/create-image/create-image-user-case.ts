import AppError from "../../../../errors/app-error";
import Either, { Left, Right } from "../../../../errors/either";
import type {
  HttpBodyResponse,
  MultipartFile,
} from "../../../../infra/http/interfaces";
import Image from "../../entities/image";
import imagePresentation, {
  IImagePresentation,
} from "../../presentations/image-presentation";
import type { IImagesRepository } from "../../infra/repositories/interfaces";

export interface ICreateImageUseCaseInput {
  file: MultipartFile | undefined;
}

type CreateImageUseCaseOutput = HttpBodyResponse<{
  image: IImagePresentation;
}>;

class CreateImageUseCase {
  constructor(private readonly imagesRepository: IImagesRepository) {}

  async execute({
    file,
  }: ICreateImageUseCaseInput): Promise<
    Either<AppError, CreateImageUseCaseOutput>
  > {
    if (!file) {
      return Left.commit(
        new AppError("bad_request", "form-data must be filled")
      );
    }

    const { mimetype, file: content } = file;

    const image = new Image({
      format: mimetype,
      content,
    });

    await image.saveTmp();

    await this.imagesRepository.create(image);

    return Right.commit({
      _self: null,
      data: {
        image: imagePresentation(image),
      },
    });
  }
}

export default CreateImageUseCase;

import Image from "../../entities/image";

export interface IImagesRepository {
  create(data: Image): Promise<void>;
  findById(_id: string): Promise<Image | null>;
  delete(_id: string): Promise<void>;
}

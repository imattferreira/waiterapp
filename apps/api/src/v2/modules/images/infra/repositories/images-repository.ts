import { model, Schema } from "mongoose";
import Image, { ImageEntity, mimeFormats } from "../../entities/image";
import type { IImagesRepository } from "./interfaces";

const Repository = model(
  "Image",
  new Schema<ImageEntity>({
    _id: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
      enum: mimeFormats,
    },
    pathname: {
      type: String,
      required: false,
    },
    createdAt: {
      type: String,
      required: true,
    },
    updatedAt: {
      type: String,
      required: true,
    },
  })
);

class ImagesRepository implements IImagesRepository {
  async create({
    _id,
    filename,
    format,
    pathname,
    createdAt,
    updatedAt,
  }: Image): Promise<void> {
    await Repository.create({
      _id,
      filename,
      format,
      pathname,
      createdAt,
      updatedAt,
    });
  }

  async findById(_id: string): Promise<Image | null> {
    const data = await Repository.findById(_id).lean();

    if (!data) {
      return null;
    }

    return new Image({ ...data });
  }

  async delete(_id: string): Promise<void> {
    await Repository.findOneAndDelete({ _id });
  }
}

export default ImagesRepository;

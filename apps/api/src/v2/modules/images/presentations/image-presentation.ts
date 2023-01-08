import Image, { ImageMimeTypes } from "../entities/image";

export interface IImagePresentation {
  id: string;
  filename: string;
  format: ImageMimeTypes;
  created_at: string;
  updated_at: string;
}

function userPresentation({
  _id,
  filename,
  format,
  createdAt,
  updatedAt,
}: Image): IImagePresentation {
  return {
    id: _id,
    filename,
    format,
    created_at: createdAt,
    updated_at: updatedAt,
  };
}

export default userPresentation;

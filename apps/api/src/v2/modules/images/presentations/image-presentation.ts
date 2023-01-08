import Image, { ImageMimeFormats } from "../entities/image";

export interface IImagePresentation {
  id: string;
  name: string;
  format: ImageMimeFormats;
  created_at: string;
  updated_at: string;
}

function userPresentation({
  _id,
  name,
  format,
  createdAt,
  updatedAt,
}: Image): IImagePresentation {
  return {
    id: _id,
    name,
    format,
    created_at: createdAt,
    updated_at: updatedAt,
  };
}

export default userPresentation;

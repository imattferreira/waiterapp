import Entity from "@/entities/entity";
import type { EntityInput, EntityProps } from "@/entities/interfaces";
import AppError from "@/errors/app-error";
import crypto from "@/utils/crypto";

export type ImageMimeTypes =
  | "image/png"
  | "image/jpg"
  | "image/jpeg"
  | "image/webp";

interface ImageInput extends EntityInput {
  filename?: string;
  format: ImageMimeTypes | string;
  pathname?: string | null;
}

export interface ImageEntity extends EntityProps {
  filename: string;
  pathname: string | null;
  format: ImageMimeTypes;
}

export const mimeFormats = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
];

class Image extends Entity<ImageEntity> {
  constructor({
    _id,
    format,
    filename,
    pathname = null,
    createdAt,
    updatedAt,
  }: ImageInput) {
    if (!mimeFormats.includes(format)) {
      throw new AppError("bad_request", "[format] is invalid");
    }

    super({
      _id,
      filename: filename || crypto.randomUUID(),
      format: format as ImageMimeTypes,
      pathname,
      createdAt,
      updatedAt,
    });
  }

  get filename(): string {
    return this.props.filename;
  }

  get format(): ImageMimeTypes {
    return this.props.format;
  }

  get pathname(): string | null {
    return this.props.pathname;
  }

  set filename(filename: string) {
    this.props.filename = filename;
    this.updateTimestamps();
  }

  set pathname(pathname: string | null) {
    this.props.pathname = pathname;
    this.updateTimestamps();
  }

  set format(format: ImageMimeTypes) {
    if (!mimeFormats.includes(format)) {
      throw new AppError("bad_request", "[format] is invalid");
    }

    this.props.format = format;
    this.updateTimestamps();
  }
}

export default Image;

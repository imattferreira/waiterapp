import Entity from "../../../entities/entity";
import type { EntityInput, EntityProps } from "../../../entities/interfaces";
import AppError from "../../../errors/app-error";
import { File } from "../../../infra/http/interfaces";
import crypto from "../../../utils/crypto";
import fs from "node:fs";

export type ImageMimeFormats =
  | "image/png"
  | "image/jpg"
  | "image/jpeg"
  | "image/webp";

interface ImageInput extends EntityInput {
  name?: string;
  format: ImageMimeFormats | string;
  content?: File | null;
  filepath?: string | null;
}

export interface ImageEntity extends EntityProps {
  name: string;
  content: File | null;
  filepath: string | null;
  format: ImageMimeFormats;
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
    name,
    content = null,
    filepath = null,
    createdAt,
    updatedAt,
  }: ImageInput) {
    if (!mimeFormats.includes(format)) {
      throw new AppError("bad_request", "[format] is invalid");
    }

    super({
      _id,
      name: name || crypto.randomUUID(),
      format: format as ImageMimeFormats,
      content,
      filepath,
      createdAt,
      updatedAt,
    });
  }

  get name(): string {
    return this.props.name;
  }

  get format(): ImageMimeFormats {
    return this.props.format;
  }

  get content(): File | null {
    return this.props.content;
  }

  get filepath(): string | null {
    return this.props.filepath;
  }

  set name(name: string) {
    this.props.name = name;
    this.updateTimestamps();
  }

  set content(content: File | null) {
    this.props.content = content;
    this.updateTimestamps();
  }

  set filepath(filepath: string | null) {
    this.props.filepath = filepath;
    this.updateTimestamps();
  }

  set format(format: ImageMimeFormats) {
    if (!mimeFormats.includes(format)) {
      throw new AppError("bad_request", "[format] is invalid");
    }

    this.props.format = format;
    this.updateTimestamps();
  }

  async saveTmp(): Promise<boolean> {
    const { content } = this.props;

    if (!content) {
      return false;
    }

    const chunks: Buffer[] = [];

    for await (const chunk of content) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);
    const filename = this.props.name;
    const extension = this.props.format.split("/")[1];

    fs.writeFileSync(`tmp/${filename}.${extension}`, buffer);

    return true;
  }
}

export default Image;

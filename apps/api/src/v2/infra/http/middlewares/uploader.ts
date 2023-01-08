import crypto from "../../../utils/crypto";
import datetime from "../../../utils/datetime";
import fs from "../../../utils/fs";
import { File, HttpRequest, HttpResponse } from "../interfaces";

interface UploaderOptions {
  tmp?: boolean;
  maxSize?: number;
  fieldname: string;
}

const MAX_SIZE = 1.2 * 10 ** 7; // 12 megabytes
const TMP_DIR_PATH = "tmp";

async function toBuffer(file: File) {
  const chunks: Buffer[] = [];

  for await (const chunk of file) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

function uploader({
  tmp = false,
  maxSize = MAX_SIZE,
  fieldname,
}: UploaderOptions) {
  const middleware = async (req: HttpRequest, res: HttpResponse) => {
    const file = await req.file({ limits: { fileSize: maxSize } });

    if (!file || file.fieldname !== fieldname) {
      req.data = {
        files: [],
      };
      return;
    }

    let filename = null;
    let pathname = null;

    if (tmp) {
      filename = `${crypto.randomUUID()}-${datetime.getUTCTime()}`;
      const buffer = await toBuffer(file.file);
      const extension = file.mimetype.split("/")[1];
      pathname = `${TMP_DIR_PATH}/${filename}.${extension}`;

      fs.writeFile(pathname, buffer);
    }

    req.data = {
      files: [
        {
          filename: filename ?? file.filename,
          mimetype: file.mimetype,
          pathname,
        },
      ],
    };
  };

  return middleware;
}

export default uploader;

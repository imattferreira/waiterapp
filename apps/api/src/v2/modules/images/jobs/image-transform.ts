import Queue from "@/infra/queue";

import { ImageMimeTypes } from "../entities/image";

interface QueueData {
  id: string;
  filename: string;
  pathname: string;
  format: ImageMimeTypes;
}

const KEY = "IMAGE_TRANSFORM";
const WORKER = "image";

class ImageTransformJob extends Queue {
  commit({ filename, format, id, pathname }: QueueData): Promise<boolean> {
    return this.add({
      key: KEY,
      worker: WORKER,
      data: {
        filename,
        format,
        id,
        pathname,
      },
    });
  }
}

export default ImageTransformJob;

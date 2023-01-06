import type { DocSchema } from "../../../../infra/http/interfaces";

const pingDocs: DocSchema = {
  schema: {
    response: {
      200: {
        description: "service is available",
        type: "null",
      },
      500: {
        description: "service is unavailable",
        type: "null",
      },
    },
  },
};

export default pingDocs;

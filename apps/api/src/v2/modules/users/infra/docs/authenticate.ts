import type { DocSchema } from "../../../../infra/http/interfaces";

const authenticateDocs: DocSchema = {
  schema: {
    response: {
      200: {
        description: "response and schema description",
        type: "string",
      },
    },
  },
};

export default authenticateDocs;

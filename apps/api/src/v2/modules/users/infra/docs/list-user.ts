import type { DocSchema } from "../../../../infra/http/interfaces";

const listUserDocs: DocSchema = {
  schema: {
    response: {
      200: {
        description: "response and schema description",
        type: "string",
      },
    },
  },
};

export default listUserDocs;

import type { DocSchema } from "../../../../infra/http/interfaces";

const pingDocs: DocSchema = {
  description:
    "make a ping to the server. OBS: is necessary auth token and admin role",
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
};

export default pingDocs;

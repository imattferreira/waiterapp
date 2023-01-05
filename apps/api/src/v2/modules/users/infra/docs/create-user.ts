import type { DocSchema } from "../../../../infra/http/interfaces";

const createUserDocs: DocSchema = {
  schema: {
    response: {
      200: {
        description: 'response and schema description',
        type: 'string'
      }
    }
  }
}

export default createUserDocs;

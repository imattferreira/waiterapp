import type { DocSchema } from "../../../../infra/http/interfaces";

const listUsersDocs: DocSchema = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
        }
      }
    },
    response: {
      204: {
        description: "user deleted with success",
        type: 'null'
      },
      400: {
        description: 'a field are incorrect',
        type: 'object',
        properties: {
          status: {
            type: 'number'
            },
          message: {
            type: 'string',
            enum: ['invalid [id] param']
          }
        }
      },
    },
  },
};

export default listUsersDocs;

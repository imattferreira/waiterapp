import type { DocSchema } from "../../../../infra/http/interfaces";

const updateUserDocs: DocSchema = {
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
    body: {
      type: 'object',
      required: ['email', 'name', 'password'],
      properties: {
        email: { type: 'string' },
        name: { type: 'string', format: 'email' },
        password: { type: 'string' },
        role: { type: 'string', enum: ['waiter', 'admin'],  }
      }
      },
    response: {
      204: {
        description: "user updated with success",
        type: "null",
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
            enum: ['some required fields are missing', '[id] is invalid', '[password] is too weak', '[email] is invalid', '[role] is invalid']
          }
        }
      },
      409: {
        description: 'the [email] already registered with another user',
        type: 'object',
        properties: {
          status: {
            type: 'number'
            },
          message: {
            type: 'string',
            enum: ['[email] already exists']
          }
        }
      }
    },
  },
};

export default updateUserDocs;

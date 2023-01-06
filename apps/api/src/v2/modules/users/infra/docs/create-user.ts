import type { DocSchema } from "../../../../infra/http/interfaces";

const createUserDocs: DocSchema = {
  schema: {
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
      201: {
        description: "user created with success",
        type: "object",
        properties: {
          _self: {
            type: 'null',
          },
          data: {
            type: 'object',
            properties: {
              user: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    format: 'uuid'
                    },
                  email: {
                    type: 'string',
                    format: 'email'
                    },
                  name: {
                    type: 'string'
                    },
                  role: {
                    type: 'string',
                    enum: ['waiter', 'admin']
                    },
                  created_at: {
                    type: 'string',
                  format: 'date-time'
                    },
                  updated_at: {
                    type: 'string',
                    format: 'date-time'
                    },
                }
              }
            }
          }
        }
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
            enum: ['some required fields are missing', '[password] is too weak', '[email] is invalid', '[role] is invalid']
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

export default createUserDocs;

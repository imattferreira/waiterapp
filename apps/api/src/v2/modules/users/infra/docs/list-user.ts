import type { DocSchema } from "../../../../infra/http/interfaces";

const listUserDocs: DocSchema = {
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
      200: {
        description: "user found",
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
            enum: ['invalid [id] param']
          }
        }
      },
      404: {
        description: 'user not found',
        type: 'object',
        properties: {
          status: {
            type: 'number'
            },
          message: {
            type: 'string',
            enum: ['user not found']
          }
        }
      }
    },
  },
};

export default listUserDocs;

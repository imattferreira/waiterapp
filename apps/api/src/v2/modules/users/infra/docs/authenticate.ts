import type { DocSchema } from "../../../../infra/http/interfaces";

const authenticateDocs: DocSchema = {
  body: {
    type: "object",
    required: ["email", "name", "password"],
    properties: {
      email: { type: "string" },
      name: { type: "string", format: "email" },
      password: { type: "string" },
      role: { type: "string", enum: ["waiter", "admin"] },
    },
  },
  response: {
    200: {
      description: "user authorized",
      type: "object",
      properties: {
        _self: {
          type: "null",
        },
        data: {
          type: "object",
          properties: {
            token: {
              type: "string",
            },
            user: {
              type: "object",
              properties: {
                _id: {
                  type: "string",
                  format: "uuid",
                },
                email: {
                  type: "string",
                  format: "email",
                },
                name: {
                  type: "string",
                },
                role: {
                  type: "string",
                  enum: ["waiter", "admin"],
                },
                created_at: {
                  type: "string",
                  format: "date-time",
                },
                updated_at: {
                  type: "string",
                  format: "date-time",
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: "a field are incorrect",
      type: "object",
      properties: {
        status: {
          type: "number",
        },
        message: {
          type: "string",
          enum: ["some required fields are missing"],
        },
      },
    },
    401: {
      description: "user unauthorized",
      type: "object",
      properties: {
        status: {
          type: "number",
        },
        message: {
          type: "string",
          enum: ["email or password incorrect"],
        },
      },
    },
  },
};

export default authenticateDocs;

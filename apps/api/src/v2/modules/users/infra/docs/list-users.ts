import type { DocSchema } from "@/infra/http/interfaces";

const listUsersDocs: DocSchema = {
  description:
    "list all users data. OBS: the auth token and 'admin' is required",
  response: {
    200: {
      description: "users listed",
      type: "object",
      properties: {
        _self: {
          type: "null",
        },
        data: {
          type: "object",
          properties: {
            users: {
              type: "array",
              items: {
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
    },
  },
};

export default listUsersDocs;

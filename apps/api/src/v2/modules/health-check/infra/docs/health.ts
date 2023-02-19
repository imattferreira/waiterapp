import type { DocSchema } from "@/infra/http/interfaces";

const pingDocs: DocSchema = {
  description:
    "get the server health statistics. OBS: is necessary auth token and admin role",
  response: {
    200: {
      description: "service is available",
      type: "object",
      properties: {
        _self: {
          type: "null",
        },
        data: {
          type: "object",
          properties: {
            cpu: {
              type: "object",
              properties: {
                total: { type: "number" },
                usage: { type: "number" },
              },
            },
            memory: {
              type: "object",
              properties: {
                heap: {
                  type: "object",
                  properties: {
                    total: { type: "number" },
                    usage: { type: "number" },
                    percentage: { type: "string" },
                  },
                },
              },
            },
            buffers: { type: "number" },
            external: { type: "number" },
            rss: { type: "number" },
          },
        },
      },
    },
  },
};

export default pingDocs;

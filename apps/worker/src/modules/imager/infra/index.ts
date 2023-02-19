import { Queue, Worker } from "bullmq";

import database from "../../../infra/database";

const queue = new Queue("imager", {
  connection: database.connection({ type: "redis" }),
});

new Worker(
  "imager",
  async ({ name, data }) => {
    const availableJobs = (await import("../jobs")).default;

    const job = availableJobs[name];

    if (job) {
      await job(data);
    }
  },
  { connection: database.connection({ type: "redis" }) }
);

export default queue;

import path from "node:path";

const QUERIES_PATH = path.resolve(__dirname, "..", "..", "modules");

// Each queue is a application module
export type Queues = "imager";

interface AddJobFnProps {
  queue: Queues;
  // TODO improve
  action: string;
  // TODO improve
  data: object;
}

async function add({
  queue: queueName,
  action,
  data,
}: AddJobFnProps): Promise<void> {
  try {
    const query = (
      await import(path.resolve(QUERIES_PATH, queueName, "jobs", "index.ts"))
    ).default;

    if (!query) {
      throw new Error("queue not found");
    }

    const job = query[action];

    if (!job) {
      throw new Error("action not found");
    }

    await job(data);
  } catch {
    throw new Error("internal server error");
  }
}

add({ queue: "imager", action: "resize", data: { test: 12 } });

export default Object.freeze({
  add,
});

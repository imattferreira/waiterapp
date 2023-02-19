import IORedis, { Redis } from "ioredis";

interface Connection {
  type: "redis" | "mongo";
}

let redisConnection: Redis;

function connect({ type = "redis" }: Connection) {
  if (type === "redis") {
    if (!redisConnection) {
      redisConnection = new IORedis({ maxRetriesPerRequest: 5 });
    }

    return redisConnection;
  }
}

export default connect;

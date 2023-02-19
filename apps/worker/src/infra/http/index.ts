// TODO configure helmet, cors, ...
import fs from "node:fs";
import path from "node:path";

import express from "express";

import { toKebabCase } from "../../utils/string";
import queue, { Queues } from "../queue";

const PORT = 4000;
const MODULE_DIR = path.resolve(__dirname, "..", "..", "modules");

const app = express();

app.use(express.json());

app.post("/:worker", async (req, res) => {
  // worker is the module of the use-case in SNAKE_CASE
  const { worker } = req.params;
  // key is the name of job (aka use-case) in SNAKE_CASE
  const { key, data } = req.body;

  const convertedWorker = toKebabCase(worker);
  const convertedKey = toKebabCase(key);

  const workerExists = fs.existsSync(path.resolve(MODULE_DIR, convertedWorker));

  if (!workerExists) {
    return res.status(404).json({ message: "[worker] not found" });
  }

  const useCaseExists = fs.existsSync(
    path.resolve(MODULE_DIR, convertedKey, "use-cases", convertedKey)
  );

  if (!useCaseExists) {
    return res.status(404).json({ message: "[key] not found" });
  }

  await queue.add({ queue: worker as Queues, action: key, data });

  return res.status(201).end();
});

app.listen(PORT);

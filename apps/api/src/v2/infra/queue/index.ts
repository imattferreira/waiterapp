interface QueueAdd {
  data: object;
  key: string;
  worker: string;
}

const URL = "http://localhost:4000";

class Queue {
  protected async add({ data, key, worker }: QueueAdd): Promise<boolean> {
    const body = JSON.stringify({ key, data });

    const url = `${URL}/${worker}`;

    const response = await fetch(url, { method: "POST", body });

    return response.ok;
  }
}

export default Queue;

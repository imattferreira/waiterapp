type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

type RequestParams = {
  method: HttpMethods;
  body?: object;
  endpoint: string;
};

class HttpClient {
  constructor(private readonly url: string) {}

  private formatUrl(endpoint: string): string {
    return this.url + endpoint;
  }

  private async request<T extends Object>({
    endpoint,
    method,
    body,
  }: RequestParams): Promise<T | Error> {
    const urlWithEndpoint = this.formatUrl(endpoint);

    const params: RequestInit = {
      method,
      body: body ? JSON.stringify(body) : null,
    };

    try {
      const response = await fetch(urlWithEndpoint, params);

      if (response.ok) {
        const result = response.json();

        return result as unknown as T;
      }

      // TODO
      const message: any = response.body ? response.json() : null;

      if (message) {
        throw new Error(message);
      }

      throw new Error("no message");
    } catch {
      // TODO
      throw new Error("no message");
    }
  }

  async get<T extends Object>(endpoint: string): Promise<T | Error> {
    return this.request({ endpoint, method: "GET" });
  }

  async post<T extends Object>(
    endpoint: string,
    body: object
  ): Promise<T | Error> {
    return this.request({ endpoint, method: "POST", body });
  }

  async put<T extends Object>(
    endpoint: string,
    body: object
  ): Promise<T | Error> {
    return this.request({ endpoint, method: "PUT", body });
  }

  async del<T extends Object>(endpoint: string): Promise<T | Error> {
    return this.request({ endpoint, method: "DELETE" });
  }
}

export default HttpClient;

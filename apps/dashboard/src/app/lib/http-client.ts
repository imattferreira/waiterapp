
class HttpClient {
  constructor(private readonly url: string) {}

  async get<T extends Object>(endpoint: string): Promise<T | Error> {
    throw new Error('method not implemented yet!')
  }

  async post<T extends Object>(endpoint: string, body: object): Promise<T | Error> {
    throw new Error('method not implemented yet!')
  }

  async put<T extends Object>(endpoint: string, body: object): Promise<T | Error> {
    throw new Error('method not implemented yet!')
  }

  async del<T extends Object>(endpoint: string): Promise<T | Error> {
    throw new Error('method not implemented yet!')
  }
}

export default HttpClient;

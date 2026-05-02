
import { request } from '@playwright/test';

export class APIClient {
  private context: any;

  async init(baseURL: string) {
    this.context = await request.newContext({ baseURL });
  }

  async get(url: string) {
    return this.context.get(url);
  }

  async post(url: string, body: any) {
    return this.context.post(url, { data: body });
  }
}


import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { APIClient } from '../api/client/apiClient';
import { UserService } from '../api/services/userService';

let client = new APIClient();
let service: any;
let response: any;

Given('payload is ready', async () => {
  await client.init('https://reqres.in/api');
  service = new UserService(client);
});

When('user sends POST request', async () => {
  response = await service.createUser({ name: "test", job: "qa" });
});

When('user fetches user', async () => {
  response = await service.getUser("2");
});

Then('status should be {int}', async (code) => {
  expect(response.status()).toBe(code);
});

Then('validate schema', async () => {
  const body = await response.json();
  if (!body.name) throw new Error("Invalid schema");
});

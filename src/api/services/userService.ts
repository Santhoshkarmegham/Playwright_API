
export class UserService {
  constructor(private client: any) {}

  createUser(data: any) {
    return this.client.post('/users', data);
  }

  getUser(id: string) {
    return this.client.get(`/users/${id}`);
  }
}

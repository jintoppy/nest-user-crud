import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';

@Injectable()
export class UserService {
  users = [
    { username: 'abcd', password: 'abcd' },
    { username: 'def', password: 'def' },
  ];

  login(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    return user ? user : null;
  }

  register(newUser: User) {
    this.users = [...this.users, newUser];
    return { messaage: 'success' };
  }

  getUsers() {
    return this.users;
  }
}

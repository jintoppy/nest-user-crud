import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

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

  async register(newUser: User) {
    await this.usersRepository.save(newUser);
    return 'created';
  }

  getUsers() {
    return this.usersRepository.find();
  }
}

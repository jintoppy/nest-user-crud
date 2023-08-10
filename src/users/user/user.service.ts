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

  async login(username: string, password: string) {
    const user = await this.usersRepository.findOne({
      where: { username, password },
    });

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

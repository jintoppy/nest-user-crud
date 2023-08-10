import { Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { UserService } from './user/user.service';

@Resolver((of) => UserEntity)
export class UsersResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => [UserEntity])
  getUsers() {
    return this.userService.getUsers();
  }
}

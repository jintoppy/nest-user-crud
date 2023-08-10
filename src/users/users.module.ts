import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UsersResolver } from './users.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UsersResolver],
  controllers: [UserController],
})
export class UsersModule {}

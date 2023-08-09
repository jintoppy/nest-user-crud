import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/user';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/login')
  login(@Body() loginInfo: { username: string; password: string }, @Res() res) {
    const user = this.userService.login(loginInfo.username, loginInfo.password);
    if (user) {
      return res.status(200).send(user);
    }
    res.status(401).send({ message: 'not authenticated' });
  }

  @Post('/register')
  register(@Body() registerInfo: User) {
    return this.userService.register(registerInfo);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}

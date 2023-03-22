import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  createUser(@Body() body: User) {
    return this.service.createUser(body);
  }
}

import { Injectable } from '@nestjs/common';
import { MaxReturn } from './decorators/maxReturn.decorator';
import { User } from './interfaces/user.interface';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(input: User) {
    await this.usersRepository.create(input);
  }

  @MaxReturn(100)
  async renameIt(name, surname) {
    const user = await this.usersRepository.findFirst({ name, surname });
    const rating = (user.likes + 1) / user.bans;

    return rating;
  }
}

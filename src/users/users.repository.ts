import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersRepository {
  async findFirst(input: { name: string; surname: string }): Promise<User> {
    // идёт запрос к базе данных
    return {
      someField1: 123,
      name: input.name,
      surname: input.surname,
      likes: 123.2,
      bans: -2,
    };
  }

  async create(user: User) {
    // creating
  }
}

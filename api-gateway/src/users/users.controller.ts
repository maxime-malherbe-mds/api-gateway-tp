import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../../service-user/src/users/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}

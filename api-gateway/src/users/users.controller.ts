import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { AxiosResponse } from 'axios';
import { User } from '../../../service-user/src/users/entities/user.entity';
import { Observable } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  
}

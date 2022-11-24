import { CacheInterceptor, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.data;
  }

  @Post()
  async create(user: User) {
    const users = await this.usersService.create(user);
    return users.data;
  }

  @Patch(':id')
  async update(@Param('id') id: string, user: User) {
    const users = await this.usersService.update(id, user);
    return users.data;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const users = await this.usersService.remove(id);
    return users.data;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return user.data;
  }
}

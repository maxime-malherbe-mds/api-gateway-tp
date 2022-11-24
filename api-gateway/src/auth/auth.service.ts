import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

//   async validateUser(username: string, pass: string): Promise<AxiosResponse<User>> {
//     const user = await this.usersService.findOne(username);
//     if (user && user.password === pass) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }
}
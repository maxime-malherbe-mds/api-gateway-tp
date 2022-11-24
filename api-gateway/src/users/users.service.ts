import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { User } from '../../../service-user/src/users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<User[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<User[]>('http://localhost:3000/users'),
    );
    return data;
  }
}

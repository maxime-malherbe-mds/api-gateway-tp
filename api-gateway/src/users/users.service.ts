import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Promise<AxiosResponse<User[]>> {
    return this.httpService.axiosRef.get('http://localhost:3001/users');
  }

  findOne(id: string): Promise<AxiosResponse<User>> {
    return this.httpService.axiosRef.get(`http://localhost:3001/users/${id}`);
  }

  create(user: User): Promise<AxiosResponse<User>> {
    return this.httpService.axiosRef.post('http://localhost:3001/users', user);
  }

  update(id: string, user: User): Promise<AxiosResponse<User>> {
    return this.httpService.axiosRef.put(`http://localhost:3001/users/${id}`, user);
  }

  remove(id: string): Promise<AxiosResponse<User>> {
    return this.httpService.axiosRef.delete(`http://localhost:3001/users/${id}`);
  }

}

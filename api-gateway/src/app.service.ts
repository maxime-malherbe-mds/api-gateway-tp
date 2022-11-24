import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Test!';
  }
}

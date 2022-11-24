import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MetricsModule } from './metrics/metrics.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [UsersModule, AuthModule, MetricsModule],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}

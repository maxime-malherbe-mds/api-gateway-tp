import { Controller, Get} from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('admin/metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  findAll() {
    return this.metricsService.findAll();
  }
}

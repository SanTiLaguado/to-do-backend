import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatusService } from '../services/status.service';
import { Status } from '../../status/entities/status.entity';
import { AuthGuard } from '../../auth/guard/auth.guard';

@Controller('status')
@UseGuards(AuthGuard)
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  // Ver todos los estados
  @Get()
  async findAll(): Promise<Status[]> {
    return this.statusService.findAll();
  }

}

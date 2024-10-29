import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from '../entities/status.entity';

// Hacer los inserts por defecto de los Status

@Injectable()
export class StatusSeeder {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepository: Repository<Status>,
  ) {}

  async seed() {
    const statuses = [
      { name: 'Pendiente' },
      { name: 'En Progreso' },
      { name: 'Completada' },
    ];

    for (const status of statuses) {
      const existingStatus = await this.statusRepository.findOne({ where: { name: status.name } });
      if (!existingStatus) {
        await this.statusRepository.save(status);
      }
    }
  }
}

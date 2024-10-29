import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';
import { StatusService } from './services/status.service';
import { StatusController } from './controllers/status.controller';
import { StatusSeeder } from './seeders/status.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Status])],
  providers: [StatusService, StatusSeeder],
  controllers: [StatusController],
  exports: [StatusService, StatusSeeder, TypeOrmModule]
})
export class StatusModule {}

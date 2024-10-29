import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';
import { Status } from '../status/entities/status.entity';
import { Task } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Status])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}

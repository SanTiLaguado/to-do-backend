import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Task } from '../entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { CreateTaskDto } from '../dto/create-task.dto';
import { AuthGuard } from '../../auth/guard/auth.guard';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    
    // Crear nueva tarea
    @Post()
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.create(createTaskDto);
    }

    // Ver todas las tareas
    @Get()
    async getAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    // Ver una tarea por ID
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Task> {
        return this.tasksService.findById(id);
    }

    // Editar una tarea por ID
    @Put(':id')
    async editById(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.tasksService.update(id, updateTaskDto);
    }

    // Eliminar tarea por ID
    @Delete(':id')
    async deleteById(@Param('id') id: number): Promise<void> {
        return this.tasksService.delete(id);
    }
}

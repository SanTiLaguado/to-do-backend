import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}
    
    // Ver todas las tareas
    async findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    // Ver una tarea por ID
    async findById(id: number): Promise<Task> {
        const task = await this.taskRepository.findOne({ where: { id } });
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }

    // Crear nueva tarea
    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const task = this.taskRepository.create(createTaskDto);
        return this.taskRepository.save(task);
    }   

    // Editar una tarea por ID
    async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const task = await this.taskRepository.findOne({ where: { id } });
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        // Actualizar los campos según el DTO
        if (updateTaskDto.title !== undefined) {
            task.title = updateTaskDto.title;
        }
        if (updateTaskDto.description !== undefined) {
            task.description = updateTaskDto.description;
        }
        if (updateTaskDto.statusId !== undefined) {
            task.statusId = updateTaskDto.statusId;
        }
        if (updateTaskDto.dueDate !== undefined) {
            task.dueDate = new Date(updateTaskDto.dueDate);
        }

        return this.taskRepository.save(task);
    }

    // Eliminar tarea por ID
    async delete(id: number): Promise<void> {
        const result = await this.taskRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
    }
    
}

import { IsString, IsNotEmpty, IsDateString, IsEnum, IsOptional } from 'class-validator';

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?: string;

    @IsOptional()
    statusId?: number;

    @IsOptional()
    @IsDateString()
    dueDate?: string;
}

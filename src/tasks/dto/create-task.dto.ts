import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  statusId: number;

  @IsNotEmpty()
  @IsDateString()
  dueDate: string;
}

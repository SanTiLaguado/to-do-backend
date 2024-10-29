import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('status')
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // 'pendiente', 'en progreso', 'completada'
}

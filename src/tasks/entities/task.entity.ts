import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Entidad Tarea
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    title: string;

    @Column({ length: 100, nullable: true })
    description?: string;

    @Column()
    dueDate: Date;

    @Column({ nullable: false })
    statusId: number;
}

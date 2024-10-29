import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { StatusModule } from './status/status.module';
import { StatusSeeder } from './status/seeders/status.seeder';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0764',
      database: 'to_do',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TasksModule,
    StatusModule,
  ],
  controllers: [],
  providers: [StatusSeeder],
})
export class AppModule implements OnModuleInit {

  // Ejecutar el seeder con los inserts por defecto de status
  constructor(private readonly statusSeeder: StatusSeeder) { }
  async onModuleInit() {
    await this.statusSeeder.seed();
  }
}

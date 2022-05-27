import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces/task.interface';
import { TaskDTO } from 'src/task/dtos/task.dto';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TaskService {
  tasks: ITask[] = [];
  create(taskDto: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDto,
    };
    this.tasks.push(task);
    return task;
  }

  update(id: string, taskDto: TaskDTO): ITask {
    const newTask = { id, ...taskDto };
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  findOne(id: string): ITask {
    return this.tasks.find((task) => task.id === id);
  }

  delete(id: string): string {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    return 'Eliminado correctamente';
  }

  findAll(): ITask[] {
    return this.tasks;
  }
}

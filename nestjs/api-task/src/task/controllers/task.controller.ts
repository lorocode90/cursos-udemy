import { ITask } from './../interfaces/task.interface';
import { TaskDTO } from 'src/task/dtos/task.dto';

import { TaskService } from './../services/task.service';
import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Get,
} from '@nestjs/common';
//omar
@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post('create')
  craete(@Body() taskDTO: TaskDTO) {
    return this.taskService.create(taskDTO);
  }
  @Put('update/:id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.taskService.delete(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string): ITask {
    return this.taskService.findOne(id);
  }

  @Get()
  findAll(): ITask[] {
    return this.taskService.findAll();
  }
}

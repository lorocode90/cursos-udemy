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
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { rejects } from 'assert';
//omar
@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  craete(@Body() taskDTO: TaskDTO) {
    //  throw new BadRequestException('Error en peticion');
    throw new HttpException('Error en peticion', HttpStatus.BAD_REQUEST);
    //  return new Promise((resolve, rejects) => {
    //    setTimeout(() => rejects('Error en peticion'), 2000);
    //  });
    //  return this.taskService.create(taskDTO);
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

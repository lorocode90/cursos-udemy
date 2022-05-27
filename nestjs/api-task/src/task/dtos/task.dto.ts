import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

//task.dto.ts
export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}

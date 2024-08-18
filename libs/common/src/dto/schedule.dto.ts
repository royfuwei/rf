import { IsDate, IsOptional, IsString } from 'class-validator';

export class ScheduleInfoDTO {
  @IsString()
  name: string;

  @IsString()
  schedule: string;

  @IsDate()
  @IsOptional()
  startTime?: Date;

  @IsDate()
  @IsOptional()
  endTime?: Date;
}

export class ReqRescheduleBodyDTO {
  @IsString()
  name: string;

  @IsString()
  schedule: string;

  @IsDate()
  @IsOptional()
  startTime?: Date;

  @IsDate()
  @IsOptional()
  endTime?: Date;
}

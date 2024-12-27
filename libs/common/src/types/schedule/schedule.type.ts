import { Job } from 'node-schedule';

export type ScheduleJobInfo = {
  name: string;
  schedule: string;
  startTime?: Date;
  endTime?: Date;
  job: Job;
};

export type RescheduleInfo = {
  schedule: string;
  startTime?: Date;
  endTime?: Date;
};

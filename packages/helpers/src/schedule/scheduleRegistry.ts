import { RescheduleInfo, ScheduleInfoDTO, ScheduleJobInfo } from '@rfjs/common';
import { JobCallback, gracefulShutdown, scheduleJob } from 'node-schedule';

export class ScheduleRegistry {
  private static schedules= new Map<string, ScheduleJobInfo>();

  public static registerSchedule(
    name: string,
    schedule: string,
    job: JobCallback,
    startTime?: Date,
    endTime?: Date,
  ): void {
    const initJob = scheduleJob(name, {
      rule: schedule,
      start: startTime,
      end: endTime,
    }, job);
    const scheduleJobInfo: ScheduleJobInfo = {
      name,
      schedule,
      startTime,
      endTime,
      job: initJob,
    };
    this.schedules.set(name, scheduleJobInfo);
  }

  public static getAllSchedulesInfoDTO(): ScheduleInfoDTO[] {
    const schedules = this.getAllSchedules();
    const scheduleJobInfos = Array.from(schedules.values());
    const data: ScheduleInfoDTO[] = scheduleJobInfos.map((job) => {
      return {
        name: job.name,
        schedule: job.schedule,
        startTime: job.startTime,
        endTime: job.endTime,
      };
    });
    return data;
  }

  public static getSchedulesInfoDTO(name: string): ScheduleInfoDTO | null {
    const schedule = this.getSchedule(name);
    if (!schedule) return null;
    return {
      name: schedule.name,
      schedule: schedule.schedule,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
    };
  }

  public static reschedule(name: string, reschedule: RescheduleInfo) {
    const schedule = this.schedules.get(name);
    if (!schedule) return null;
    schedule.job.reschedule({
      rule: reschedule.schedule,
      start: reschedule.startTime,
      end: reschedule.endTime,
    });
    schedule.schedule = reschedule.schedule;
    schedule.startTime = reschedule.startTime;
    schedule.endTime = reschedule.endTime;
    this.schedules.set(name, schedule);
    return schedule;
  }

  public static cancelSchedule(name: string): void {
    const schedule = this.schedules.get(name);
    if (!schedule) return;
    schedule.job.cancel();
  }

  public static getSchedule(name: string): ScheduleJobInfo | null {
    return this.schedules.get(name) ?? null;
  }

  public static getAllSchedules() {
    return this.schedules;
  }

  public static getAllJobs() {
    return Array.from(this.schedules.values()).map((i) => i.job);
  }

  public static gracefulShutdown() {
    return gracefulShutdown();
  }
}
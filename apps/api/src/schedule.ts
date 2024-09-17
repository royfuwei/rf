import { iocAdapter } from "./iocAdapter";
import { AppSchedule } from "./schedules/app.schedule";

export const initSchedule = async () => {
  const appSchedule = iocAdapter.container.resolve(AppSchedule);
  appSchedule.init();
};

import { inject, injectable } from "tsyringe";
import { AppUsecase } from "@rfjs/modules";
import moment from "moment";
import { ScheduleRegistry } from "@rfjs/helpers";

@injectable()
export class AppSchedule {
  constructor(
    @inject(AppUsecase)
    private readonly appUCase: AppUsecase,
  ) {}

  init() {
    ScheduleRegistry.registerSchedule('AppSchedule', '*/3600 * * * * *', () => {
      this.run();
    });
  }

  async run(): Promise<void> {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log('AppSchedule run', now);
  }
}
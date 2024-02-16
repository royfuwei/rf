import { inject, injectable } from "tsyringe";
import { IAppCtrl } from "../types/app.type";
import { AppInfo, IAppService } from "@rfjs/modules";
import { Get, JsonController } from "routing-controllers";

@injectable()
@JsonController('/app')
export class AppCtrl implements IAppCtrl {
  constructor(
    @inject('IAppService')
    private readonly appSvc: IAppService,
  ) {}

  
  @Get()
  async getAppInfo(): Promise<AppInfo> {
    return this.appSvc.getAppInfo();
  }
}

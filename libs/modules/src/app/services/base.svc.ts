import { AppInfo, IAppService } from "../types";
import { injectable } from 'tsyringe';

@injectable()
export class BaseAppService implements IAppService {
  uuid: string;
  getAppInfo(): AppInfo {
    throw new Error("Method not implemented.");
  }
}

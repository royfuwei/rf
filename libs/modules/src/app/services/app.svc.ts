import { AppInfo, IAppService } from "../types";
import { injectable } from 'tsyringe';

@injectable()
export class AppService implements IAppService {
  uuid: string;
  getAppInfo(): AppInfo {
    return {
      uuid: '',
      environment: '',
    };
  }
}

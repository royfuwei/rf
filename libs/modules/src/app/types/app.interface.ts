import { AppInfo } from './app.dto';

export interface IAppService {
  uuid: string;
  getAppInfo(): AppInfo;
}

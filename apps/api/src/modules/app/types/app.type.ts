import { AppInfo } from '@rfjs/modules';

export interface IAppCtrl {
  getAppInfo(): Promise<AppInfo>;
}
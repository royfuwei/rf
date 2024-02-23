import { ApiResDTO } from '@rfjs/common';
import { AppInfoDTO } from '@rfjs/modules';

export interface IAppCtrl {
  getAppInfo(): Promise<ApiResDTO<AppInfoDTO>>;
}

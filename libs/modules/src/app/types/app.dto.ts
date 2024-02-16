export interface AppInfo {
  uuid: string;
  environment: string;
}

export class AppInfoDTO implements AppInfo {
  uuid = '';
  environment = '';
}
import { ApiResDTO } from '@rfjs/common';
import { AppInfoDTO } from '@rfjs/modules';
import { IsString } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

export interface IAppCtrl {
  getAppInfo(): Promise<ApiResDTO<AppInfoDTO>>;
}

/* export class ReqAppBodyDTO {
  @IsString()
  @JSONSchema({
    description: 'app name',
    default: 'api'
  })
  app: string;
} */

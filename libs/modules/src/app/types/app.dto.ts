import { IsString } from "class-validator";
import { JSONSchema } from "class-validator-jsonschema";

export interface AppInfo {
  uuid: string;
  environment: string;
}

export class AppInfoDTO implements AppInfo {
  @JSONSchema({
    description: 'uuid desc',
  })
  @IsString()
  uuid = '';

  @JSONSchema({
    description: 'env desc',
  })
  @IsString()
  environment = '';
}
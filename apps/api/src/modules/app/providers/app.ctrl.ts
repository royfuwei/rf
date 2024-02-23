import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { IAppCtrl } from "../types/app.type";
import { AppInfoDTO, IAppService } from "@rfjs/modules";
import { Ctx, Get, HttpCode, JsonController, Post, UploadedFiles } from "routing-controllers";
import { File } from '@koa/multer';
import { fileUploadOptions } from "../../../common/helpers/upload.helper";
import { Context } from "koa";
import { ApiResDTO, ApiResSchema } from '@rfjs/common';

@injectable()
@JsonController('/app')
export class AppCtrl implements IAppCtrl {
  constructor(
    @inject('IAppService')
    private readonly appSvc: IAppService,
  ) {}

  @Get()
  @ApiResSchema(AppInfoDTO)
  @ApiResSchema(AppInfoDTO, { isArray: true, status: 201})
  async getAppInfo() {
    const data = this.appSvc.getAppInfo();
    const result: ApiResDTO<AppInfoDTO> = {
      success: true,
      status: 200,
      result: {
        data,
      }
    }
    return result;
  }

  @Post('/files')
  async uploadFiles(
    @Ctx() ctx: Context,
    @UploadedFiles('files', { options: fileUploadOptions() }) files: File[],
  ) {
    return files;
  }
}

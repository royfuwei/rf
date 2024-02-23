import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { IAppCtrl } from "../types/app.type";
import { AppInfo, IAppService } from "@rfjs/modules";
import { Ctx, Get, JsonController, Post, UploadedFiles } from "routing-controllers";
import { File } from '@koa/multer';
import { fileUploadOptions } from "../../../common/helpers/upload.helper";
import { Context } from "koa";

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

  @Post('/files')
  async uploadFiles(
    @Ctx() ctx: Context,
    @UploadedFiles('files', { options: fileUploadOptions() }) files: File[],
  ) {
    return files;
  }
}

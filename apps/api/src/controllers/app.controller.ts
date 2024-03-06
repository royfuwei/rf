import { inject, injectable } from "tsyringe";
import { IAppController } from "../types/app.type";
import { AppInfoDTO, IAppService } from "@rfjs/modules";
import { Body, Ctx, Get, JsonController, Post, QueryParam, UploadedFiles } from "routing-controllers";
import { File } from '@koa/multer';
import { fileUploadOptions } from "../common/helpers/upload.helper";
import { Context } from "koa";
import { ApiResDTO, ApiResSchema } from '@rfjs/common';

@injectable()
@JsonController('/app')
export class AppController implements IAppController {
  constructor(
    @inject('IAppService')
    private readonly appSvc: IAppService,
  ) {}

  @Get()
  @ApiResSchema(AppInfoDTO)
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

  /* @Post()
  async postAppData(
    @Body() body: ReqAppBodyDTO,
  ) {
    return body;
  } */

  @Get('/query')
  async queryAppData(
    @QueryParam('id') id: any,
  ) {
    return {id};
  }

  @Post('/files')
  async uploadFiles(
    @Ctx() ctx: Context,
    @UploadedFiles('files', { options: fileUploadOptions() }) files: File[],
  ) {
    return files;
  }
}

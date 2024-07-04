import { inject, injectable } from 'tsyringe';
import { IAppController } from '../types/app.type';
import {
  AppInfoDTO,
  IDemoRepository,
  IAppService,
  AppUsecase,
  INJECT_SVC_APP_SERVICE,
} from '@rfjs/modules';
import {
  Body,
  Ctx,
  Get,
  HttpCode,
  JsonController,
  Post,
  QueryParam,
  UploadedFiles,
} from 'routing-controllers';
import { File } from '@koa/multer';
import { fileUploadOptions } from '../common/helpers/upload.helper';
import { Context } from 'koa';
import {
  ApiResDataDTO,
  ApiResErrDTO,
  HttpException,
  TestDataDTO,
} from '@rfjs/common';
import httpStatus from 'http-status';
import { ResponseSchema } from 'routing-controllers-openapi';
import { ApiUtil } from '@rfjs/utils';

@injectable()
@ResponseSchema(ApiResErrDTO, {
  statusCode: httpStatus.BAD_REQUEST,
})
@JsonController('/app')
export class AppController implements IAppController {
  constructor(
    @inject(INJECT_SVC_APP_SERVICE)
    private readonly appSvc: IAppService,
    @inject(AppUsecase)
    private readonly appUCase: AppUsecase,
  ) {}

  @Get('/data')
  @ApiUtil.ApiResDataSchema(AppInfoDTO)
  async getAppData(): Promise<ApiResDataDTO<AppInfoDTO>> {
    const data = this.appSvc.getAppInfo();
    const result = ApiUtil.apiResData<AppInfoDTO>(data);
    return result;
  }

  @Get('/data/list')
  @HttpCode(httpStatus.CREATED)
  @ApiUtil.ApiResDataListSchema(AppInfoDTO, { status: httpStatus.CREATED })
  async getAppDataList(): Promise<ApiResDataDTO<AppInfoDTO>> {
    const data = this.appSvc.getAppInfo();
    const result = ApiUtil.apiResData<AppInfoDTO>(
      [data],
      httpStatus.CREATED,
    );
    return result;
  }

  @Get('/data/paginated')
  @ApiUtil.ApiResPaginatedSchema(TestDataDTO)
  async getAppPaginated() {
    const data = await this.appUCase.getTestData();
    const result = ApiUtil.apiResPaginated<TestDataDTO>(data, data.length);
    return result;
  }

  @Get('/error')
  async getError() {
    throw new HttpException('test http exception');
  }

  /* @Post()
  async postAppData(
    @Body() body: ReqAppBodyDTO,
  ) {
    return body;
  } */

  @Post('/files')
  async uploadFiles(
    @Ctx() ctx: Context,
    @UploadedFiles('files', { options: fileUploadOptions() }) files: File[],
  ) {
    return files;
  }
}

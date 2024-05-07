import { inject, injectable } from 'tsyringe';
import {
  Ctx,
  Get,
  JsonController,
  QueryParam,
  Redirect,
} from 'routing-controllers';
import { ApiResErrDTO } from '@rfjs/common';
import httpStatus from 'http-status';
import { ResponseSchema } from 'routing-controllers-openapi';
import configs from '../configs';
import { Context } from 'koa';
import lineNotifyHelper from '../common/helpers/lineNotify.helper';

@injectable()
@ResponseSchema(ApiResErrDTO, {
  statusCode: httpStatus.BAD_REQUEST,
})
@JsonController('/line/notify')
export class LineNotifyController {
  private state = '1234567890';
  private redirectUri = 'https://rfjs-api.royfuwei.dev/line/notify/callback';

  @Get('/authorize')
  @Redirect('https://notify-bot.line.me/oauth/authorize?:params')
  async getAuthorize(
    @Ctx() ctx: Context,
    @QueryParam('redirect_uri') redirectUri: string,
    @QueryParam('client_id') clientId?: string,
  ) {
    const url = new URL('https://notify-bot.line.me/oauth/authorize');
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('redirect_uri', redirectUri ?? this.redirectUri);
    url.searchParams.append(
      'client_id',
      clientId ?? configs.line.notify.clientId,
    );
    url.searchParams.append('scope', 'notify');
    url.searchParams.append('state', this.state);

    const params = url.searchParams.toString();
    return {
      params,
    };
  }

  @Get('/callback')
  async getRedirect(
    @QueryParam('code') code: string,
    @QueryParam('state') state: string,
  ) {
    try {
      const { data } = await lineNotifyHelper.getOauthToken(
        code,
        this.redirectUri,
        configs.line.notify.clientId,
        configs.line.notify.clientSecret,
      );
      return {
        success: true,
        ...data,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get('/notify')
  async notifyMessage(
    @QueryParam('accessToken') accessToken: string,
    @QueryParam('message') message: string,
  ) {
    try {
      const request = lineNotifyHelper.notifyApiAxios(
        lineNotifyHelper.lineNotifyPaths.notify,
        accessToken,
        {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      );
      const { data } = await request.post('', {
        message,
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get('/status')
  async getStatus(@QueryParam('accessToken') accessToken: string) {
    try {
      const request = lineNotifyHelper.notifyApiAxios(
        lineNotifyHelper.lineNotifyPaths.status,
        accessToken,
        {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      );
      const { data } = await request.get('');
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

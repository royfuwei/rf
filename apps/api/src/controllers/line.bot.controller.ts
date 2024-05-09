import { inject, injectable } from 'tsyringe';
import { Get, JsonController, Param } from 'routing-controllers';
import { ApiResErrDTO } from '@rfjs/common';
import httpStatus from 'http-status';
import { ResponseSchema } from 'routing-controllers-openapi';
import { messageApiClient } from '../common/helpers/lineBot.helper';

@injectable()
@ResponseSchema(ApiResErrDTO, {
  statusCode: httpStatus.BAD_REQUEST,
})
@JsonController('/line/bot')
export class LineBotController {
  @Get('/info')
  async getBotInfo() {
    try {
      return await messageApiClient.getBotInfo();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get('/users')
  async getUserInfo(
    @Param('userId') userId: string,
    @Param('message') message: string,
  ) {
    try {
      return messageApiClient.pushMessage({
        to: userId,
        messages: [
          {
            type: 'text',
            text: message,
          },
        ],
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

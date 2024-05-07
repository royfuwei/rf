import { messagingApi } from '@line/bot-sdk';
import * as line from '@line/bot-sdk';
import configs from '../../configs';

line.middleware({
  channelSecret: configs.line.bot.channelSecret,
  channelAccessToken: configs.line.bot.channelAccessToken,
});

const { MessagingApiClient } = messagingApi;
export const messageApiClient = new MessagingApiClient({
  channelAccessToken: configs.line.bot.channelAccessToken,
});

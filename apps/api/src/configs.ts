import dotenvFlow from 'dotenv-flow';
import { LoggerHelper } from './common/helpers/logger.helper';

const flowEnv = dotenvFlow.config({
  node_env: process.env.NODE_ENV,
  default_node_env: 'development',
}).parsed;

process.env = {
  ...process.env,
  ...flowEnv,
};

const configs = {
  env: process.env.NODE_ENV,
  app: {
    name: process.env['APP_API_NAME'],
    port: process.env['APP_API_PORT'],
  },
  mongodb: {
    uri: process.env['DB_MONGO_URI'],
  },
  supabase: {
    url: process.env['PUBLIC_SUPABASE_URL'],
    key: process.env['PUBLIC_SUPABASE_ANON_KEY'],
  },
  line: {
    bot: {
      channelId: process.env['LINE_CHANNEL_ID'],
      channelSecret: process.env['LINE_CHANNEL_SECRET'],
      channelAccessToken: process.env['LINE_CHANNEL_ACCESS_TOKEN'],
    },
    notify: {
      clientId: process.env['LINE_NOTIFY_CLIENT_ID'],
      clientSecret: process.env['LINE_NOTIFY_CLIENT_SECRET'],
    },
  },
};

LoggerHelper.log.info(`[NODE_ENV] ${configs.app.name} ${configs.env}`);

export default configs;

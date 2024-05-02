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
};

LoggerHelper.log.info(`[NODE_ENV] ${configs.app.name} ${configs.env}`);

export default configs;

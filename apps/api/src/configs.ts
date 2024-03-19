import dotenvFlow from 'dotenv-flow';
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
  }
};

console.info(`[NODE_ENV] ${configs.app.name} ${configs.env}`);

export default configs;
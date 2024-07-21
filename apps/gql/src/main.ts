import 'reflect-metadata';
import { initKoaApolloServer } from './koaApolloServer';
import { initKoaServer } from './koaServer';

async function main() {
  const { app, httpServer } = await initKoaServer();
  await initKoaApolloServer(app, httpServer);

  const closeProcesses = async (code = 1) => {
    httpServer.close(() => {
      console.info('Server closed');
    });
    process.exit(code);
  };

  const successHandler = () => {
    console.info('SIGTERM received');
    closeProcesses(0);
  };

  const failureHandler = (error: any) => {
    console.error('Uncaught Exception');
    console.error(error);
    closeProcesses(1);
  };

  process.on('uncaughtException', failureHandler);
  process.on('unhandledRejection', failureHandler);

  process.on('SIGTERM', successHandler);
}

main();

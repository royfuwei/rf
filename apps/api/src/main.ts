import 'reflect-metadata';
import { server } from './server';
import { LoggerHelper } from './common/helpers/logger.helper';
import { ScheduleRegistry } from '@rfjs/helpers';
import { initSchedule } from './schedule';

async function main() {
  const { httpServer } = await server();
  await initSchedule();

  const closeProcesses = async (code = 1) => {
    httpServer.close(() => {
      LoggerHelper.log.info('Server closed');
    });
    ScheduleRegistry.gracefulShutdown();
    process.exit(code);
  };

  const successHandler = () => {
    LoggerHelper.log.info('SIGTERM received');
    closeProcesses(0);
  };

  const failureHandler = (error: any) => {
    LoggerHelper.log.error('Uncaught Exception');
    LoggerHelper.log.error(error);
    closeProcesses(1);
  };

  process.on('uncaughtException', failureHandler);
  process.on('unhandledRejection', failureHandler);

  process.on('SIGTERM', successHandler);
}

main();

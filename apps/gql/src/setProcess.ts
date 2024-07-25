import { Server } from "http";
import { iocAdapter } from "./iocAdapter";
import { HttpLogger, LoggerHelper } from "./common/helpers/logger.helper";
import { INJECT_MONGO_CLIENT } from "@rfjs/modules";
import { DemoDbMongoClient } from "./common/mongodb/demoDB";

export function setProcess(httpServer: Server) {
  const mongoClient = iocAdapter.get<DemoDbMongoClient>(INJECT_MONGO_CLIENT);
  const closeProcesses = async (code = 1) => {
    httpServer.close(() => {
      HttpLogger.log.info('[Process] Server closed');
    });
    await mongoClient.connection.close();
    await iocAdapter.container.dispose();
    LoggerHelper.log.info('[Process] Server iocAdapter.container.dispose()');
    process.exit(code);
  };

  const successHandler = () => {
    LoggerHelper.log.info('[Process] SIGTERM received');
    closeProcesses(0);
  };

  const failureHandler = (error: any) => {
    LoggerHelper.log.error('[Process] Uncaught Exception');
    LoggerHelper.log.error(error);
    closeProcesses(1);
  };

  process.on('uncaughtException', failureHandler);
  process.on('unhandledRejection', failureHandler);

  process.on('SIGTERM', successHandler);
}
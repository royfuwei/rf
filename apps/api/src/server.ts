import 'reflect-metadata';
import configs from './configs';
import { iocAdapter } from './iocAdapter';
import { RoutingControllersOptions, useContainer } from 'routing-controllers';
import * as _indexControllers from './controllers';
import * as _indexMiddlewares from './middlewares';
import { initKoaApp } from './koaApp';
import { HttpLogger } from './common/helpers/logger.helper';
import { DemoDbMongoClient } from './database/mongodb/demoDB';
import { INJECT_MONGO_CLIENT } from '@rfjs/modules';

export async function server() {
  const client =
    iocAdapter.container.resolve<DemoDbMongoClient>(INJECT_MONGO_CLIENT);
  await client.connection.asPromise();
  const controllers = Object.values(_indexControllers).values();
  const middlewares = Object.values(_indexMiddlewares).values();

  const routingControllerOptions: RoutingControllersOptions = {
    controllers: [...controllers],
    middlewares: [...middlewares],
  };

  useContainer(iocAdapter);

  const app = initKoaApp(routingControllerOptions, true);

  const host = process.env.HOST ?? 'localhost';
  const port = Number(configs.app.port);

  const httpServer = app.listen(port, host, () => {
    HttpLogger.log.info(`http://${host}:${port}`);
  });

  return {
    app,
    httpServer,
  };
}

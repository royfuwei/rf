import 'reflect-metadata';
import { TsyringeAdapter } from './iocAdapter';
import { RoutingControllersOptions, useContainer } from 'routing-controllers';
import * as _indexControllers from './controllers';
import * as _indexMiddlewares from './middlewares';
import { initKoaApp } from './koaApp';

export async function server() {
  const iocAdapter = new TsyringeAdapter();
  const controllers = Object.values(_indexControllers).values();
  const middlewares = Object.values(_indexMiddlewares).values();

  const routingControllerOptions: RoutingControllersOptions = {
    controllers: [
      ...controllers,
    ],
    middlewares: [
      ...middlewares,
    ]
  }

  useContainer(iocAdapter);

  const app = initKoaApp(
    routingControllerOptions,
    true,
  );

  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ? Number(process.env.PORT) : 8001;

  const httpServer = app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });

  return {
    app,
    httpServer,
  }
}

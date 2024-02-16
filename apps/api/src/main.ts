import 'reflect-metadata';
import koa from 'koa';
import path from 'path';
import { TsyringeAdapter } from './iocAdapter';
import { useContainer, useKoaServer } from 'routing-controllers';
import { useSwaggerDocument } from './openapi';

async function main() {
  const app = new koa();
  const iocAdapter = new TsyringeAdapter();
  
  useContainer(iocAdapter);
  useKoaServer(app, {
    routePrefix: 'api',
    controllers: [ path.join(__dirname, '/modules/**/**.{controller,ctrl}.{ts,js}')],
  });
  useSwaggerDocument(app);

  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ? Number(process.env.PORT) : 8001;

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
}

main();

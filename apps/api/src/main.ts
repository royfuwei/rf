import 'reflect-metadata';
import koa from 'koa';
import path from 'path';
import { TsyringeAdapter } from './iocAdapter';
import { useContainer, useKoaServer } from 'routing-controllers';
import { useSwaggerDocument } from './openapi';
import { bodyParser } from '@koa/bodyparser';

async function main() {
  const app = new koa();
  const iocAdapter = new TsyringeAdapter();
  app.use(
    bodyParser({
      formLimit: '100mb',
      jsonLimit: '100mb',
      textLimit: '100mb',
      encoding: 'utf-8'
    }),
  );
  
  useContainer(iocAdapter);
  useKoaServer(app, {
    routePrefix: '',
    controllers: [
      path.join(__dirname, '/modules/**/**.controller.{ts,js}'),
      path.join(__dirname, '/modules/**/**.ctrl.{ts,js}'),
    ],
  });
  useSwaggerDocument(app);

  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ? Number(process.env.PORT) : 8001;

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
}

main();

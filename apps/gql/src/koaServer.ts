import Koa from 'koa';
import configs from './configs';
import { useContainer } from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { useKoaServer, getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { iocAdapter } from './iocAdapter';
import { koaSwagger } from 'koa2-swagger-ui';
import { defaultMetadataStorage } from 'class-transformer/cjs/storage';
import { HttpLogger } from './common/helpers/logger.helper';
import { bodyParser } from '@koa/bodyparser';
import cors from '@koa/cors';

export async function initKoaServer() {
  const app = new Koa();
  app.use(
    bodyParser({
      formLimit: '100mb',
      jsonLimit: '100mb',
      textLimit: '100mb',
      encoding: 'utf-8',
    }),
  );

  app.use(
    cors({
      origin: '*'
    }),
  );

  // restful
  useContainer({
    get: (someClass: any) => iocAdapter.container.resolve(someClass),
  });

  useKoaServer(app, {
    defaultErrorHandler: false,
    cors: true,
    controllers: [__dirname + '/**/*.controller.{ts,js}'],
    middlewares: [__dirname + '/**/*.{middleware,interceptor}.{ts,js}'],
    validation: true,
  });

  // open api spec
  // https://github.com/epiphone/routing-controllers-openapi

  // Parse class-validator classes into JSON Schema:
  const schemas = validationMetadatasToSchemas({
    classTransformerMetadataStorage: defaultMetadataStorage,
    refPointerPrefix: '#/components/schemas/',
  });
  const storage = getMetadataArgsStorage();
  const spec = routingControllersToSpec(
    storage,
    {},
    {
      components: {
        schemas: Object(schemas),
      },
      // info: { title: `${configs.app.name} API`, version: configs.app.version },
    },
  );

  // swagger ui
  // https://github.com/scttcper/koa2-swagger-ui
  app.use(
    koaSwagger({
      routePrefix: '/docs',
      swaggerOptions: { spec },
    }),
  );

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

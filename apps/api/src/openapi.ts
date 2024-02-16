import koa, { DefaultState, DefaultContext } from "koa";
import path from "path";
import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { koaSwagger } from 'koa2-swagger-ui';

export function useSwaggerDocument(
  app: koa<DefaultState, DefaultContext>,
) {
  // routing-controllers-openapi example:
  // https://github.com/epiphone/routing-controllers-openapi/blob/master/sample/01-basic/app.ts
  const routingControllersOptions = {
    controllers: [path.join(__dirname, '/modules/**/*.controller.{ts,js}')],
    routePrefix: '/api',
  };
  const storage = getMetadataArgsStorage();
  const spec = routingControllersToSpec(storage, routingControllersOptions, {
    info: {
      title: '@rfjs/api',
      version: 'v0.0.0',
      description: '@rfjs rest api',
    },
  });

  app.use(koaSwagger({
    routePrefix: '/docs',
    swaggerOptions: {
      spec,
    }
  }));
}
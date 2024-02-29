import koa, { DefaultState, DefaultContext } from "koa";
import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { koaSwagger } from 'koa2-swagger-ui';
import { defaultMetadataStorage } from 'class-transformer/cjs/storage';
import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import { getMetadataStorage } from "class-validator";
import * as _indexControllers from './controllers';
const { version, name } = require('../../../package.json');

export function useSwaggerDocument(
  app: koa<DefaultState, DefaultContext>,
) {
  // routing-controllers-openapi example:
  // https://github.com/epiphone/routing-controllers-openapi/blob/master/sample/01-basic/app.ts
  try {
    const controllers = Object.values(_indexControllers).values();
    const routingControllersOptions = {
      controllers: [
        ...controllers,
      ],
    };
    const storage = getMetadataArgsStorage();
    const classValidatorMetadataStorage = getMetadataStorage();
    
    const schemas = validationMetadatasToSchemas({
      classTransformerMetadataStorage: defaultMetadataStorage,
      classValidatorMetadataStorage,
      refPointerPrefix: '#/components/schemas/',
    });

    const spec = routingControllersToSpec(storage, routingControllersOptions, {
      components: {
        schemas: Object(schemas),
      },
      info: {
        title: name ?? '@rfjs/api',
        version: version ?? 'v0',
        description: '@rfjs rest api',
      },
    });
    app.use(koaSwagger({
      routePrefix: '/docs',
      swaggerOptions: {
        spec,
      }
    }));

  } catch (err) {
    const errInfo = `[DOC][useSwaggerDocument] error: ${err}`;
    console.error(errInfo);
    console.error(err);
  }
}
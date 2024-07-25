import Koa from 'koa';
import Router from 'koa-router';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { koaMiddleware } from '@as-integrations/koa';
import { buildSchemaSync } from 'type-graphql';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { iocAdapter } from './iocAdapter';
import configs from './configs';
import { Server } from 'http';
import { resolvers } from './resolvers';

export async function initKoaApolloServer(
  app: Koa<Koa.DefaultState, Koa.DefaultContext>,
  httpServer: Server,
) {
  const schema = buildSchemaSync({
    resolvers,
    container: { get: (cls) => iocAdapter.container.resolve(cls) },
    globalMiddlewares: [],
    validate: { forbidUnknownValues: false },
    emitSchemaFile: {
      path: './schema.gql',
      sortedSchema: true,
    },
  });

  const apolloServer = new ApolloServer({
    schema,
    includeStacktraceInErrorResponses: configs.gql.debug,
    csrfPrevention: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      configs.gql.playground
        ? ApolloServerPluginLandingPageLocalDefault()
        : ApolloServerPluginLandingPageProductionDefault(),
    ],
  });
  await apolloServer.start();

  /**
   * 使用 GraphQL Router 避開 @as-integrations/koa
   * 影響全部 middleware
   *
   */
  const gqlRouter = new Router();
  const appKoaGqlMiddleware = koaMiddleware(apolloServer, {
    context: async ({ ctx }: { ctx: Koa.Context }) => {
      return ctx;
    },
  });
  gqlRouter.all('/graphql', appKoaGqlMiddleware);
  app.use(gqlRouter.routes());

  return apolloServer;
}

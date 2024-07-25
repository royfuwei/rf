import 'reflect-metadata';
import { initKoaApolloServer } from './koaApolloServer';
import { initKoaServer } from './koaServer';
import { preboot } from './preboot';
import { setProcess } from './setProcess';

async function main() {
  await preboot();
  const { app, httpServer } = await initKoaServer();
  await initKoaApolloServer(app, httpServer);
  setProcess(httpServer);
}

main();

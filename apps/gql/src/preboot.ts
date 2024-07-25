import { INJECT_MONGO_CLIENT } from "@rfjs/modules";
import { iocAdapter } from "./iocAdapter";
import { DemoDbMongoClient } from "./common/mongodb/demoDB";

export async function preboot() {
  const mongoClient = iocAdapter.get<DemoDbMongoClient>(INJECT_MONGO_CLIENT);
  await mongoClient.initialize();
}
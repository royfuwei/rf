import { BaseMonogoClient } from '@rfjs/repos';
import configs from '../../configs';
import { DbLogger } from '../../common/helpers/logger.helper';

export class DemoDbMongoClient extends BaseMonogoClient {
  constructor() {
    super(configs.mongodb.uri, undefined, 'demo', DbLogger.log);
  }
}

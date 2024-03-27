import { BaseMonogoClient } from '@rfjs/repos';
import configs from '../../configs';

export class DemoDbMongoClient extends BaseMonogoClient {
  constructor() {
    super(configs.mongodb.uri, undefined, 'demo');
  }
}

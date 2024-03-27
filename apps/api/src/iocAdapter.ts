import { Action, ClassConstructor, IocAdapter } from 'routing-controllers';
import { DependencyContainer, container } from 'tsyringe';
import {
  IAppService,
  AppService,
  DemoRepository,
  IDemoRepository,
  INJECT_MONGO_CLIENT,
  INJECT_DEMO_REPO,
  INJECT_SVC_APP_SERVICE,
} from '@rfjs/modules';
import { IocLogger } from './common/helpers/logger.helper';
import { BaseMonogoClient } from '@rfjs/repos';
import { DemoDbMongoClient } from './database/mongodb/demoDB';

export class TsyringeAdapter implements IocAdapter {
  container: DependencyContainer;

  constructor() {
    this.container = container;
    this.init();
  }

  private init() {
    this.container.registerSingleton<IAppService>(
      INJECT_SVC_APP_SERVICE,
      AppService,
    );
    logRegister(
      'registerSingleton',
      ['from', INJECT_SVC_APP_SERVICE],
      ['to', 'AppService'],
    );
    this.container.registerSingleton<BaseMonogoClient>(
      INJECT_MONGO_CLIENT,
      DemoDbMongoClient,
    );
    logRegister(
      'registerSingleton',
      ['from', INJECT_MONGO_CLIENT],
      ['to', 'DemoDbMongoClient'],
    );
    this.container.registerSingleton<IDemoRepository>(
      INJECT_DEMO_REPO,
      DemoRepository,
    );
    logRegister(
      'registerSingleton',
      ['from', 'IDemoRepository'],
      ['to', 'DemoRepository'],
    );
  }

  get<T>(someClass: ClassConstructor<T>, action?: Action): T {
    const childContainer = this.container.createChildContainer();
    return childContainer.resolve<T>(someClass);
  }
}

function logRegister<T>(type: string, ...params: [string, string][]) {
  const registerStr = params.reduce((pre, cur) => {
    const str = `${cur[0]}: ${cur[1]}`;
    if (pre.length > 0) {
      pre = `${pre}, `;
    }
    pre = `${pre}${str}`;
    return pre;
  }, '');
  IocLogger.log.info(`[${type}] ${registerStr}`);
}

export const iocAdapter = new TsyringeAdapter();

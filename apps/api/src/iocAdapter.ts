import { Action, ClassConstructor, IocAdapter } from 'routing-controllers';
import { DependencyContainer, container } from 'tsyringe';
import { IAppService, AppService } from '@rfjs/modules';
import { IocLogger } from './common/helpers/logger.helper';

export class TsyringeAdapter implements IocAdapter {
  container: DependencyContainer;

  constructor() {
    this.container = container;
    this.init();
  }

  init() {
    this.container.registerSingleton<IAppService>('IAppService', AppService);
    logRegister(
      'registerSingleton',
      ['from', 'IAppService'],
      ['to', 'AppService'],
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

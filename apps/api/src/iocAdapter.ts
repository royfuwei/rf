import { Action, ClassConstructor, IocAdapter } from 'routing-controllers';
import { DependencyContainer, container } from 'tsyringe';
import { IAppService, AppService } from '@rfjs/modules';

export class TsyringeAdapter implements IocAdapter {
  container: DependencyContainer;

  constructor() {
    this.container = container;
    this.init();
  }

  init() {
    this.container.registerSingleton<IAppService>('IAppService', AppService);
  }

  get<T>(someClass: ClassConstructor<T>, action?: Action): T {
    const childContainer = this.container.createChildContainer();
    return childContainer.resolve<T>(someClass);
  }
}

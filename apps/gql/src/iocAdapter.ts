import {
  INJECT_MONGO_CLIENT,
  IDemoRepository,
  INJECT_DEMO_REPO,
  DemoRepository,
} from '@rfjs/modules';
import { BaseMonogoClient } from '@rfjs/repos';
import { container, DependencyContainer, InjectionToken } from 'tsyringe';
import { DemoDbMongoClient } from './common/mongodb/demoDB';

export class TsyringeAdapter {
  constructor(public container: DependencyContainer) {
    this.init();
  }

  private init() {
    // Register services
    this.container.registerSingleton<BaseMonogoClient>(
      INJECT_MONGO_CLIENT,
      DemoDbMongoClient,
    );
    this.container.registerSingleton<IDemoRepository>(
      INJECT_DEMO_REPO,
      DemoRepository,
    );
  }

  get<T>(token: InjectionToken<T>): T {
    const childContainer = this.container.createChildContainer();
    return childContainer.resolve<T>(token);
  }
}

export const iocAdapter = new TsyringeAdapter(container);

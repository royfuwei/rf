import { container, DependencyContainer } from 'tsyringe';

export class TsyringeAdapter {
  constructor(public container: DependencyContainer) {
    this.init();
  }

  private init() {
    // Register services
  }
}

export const iocAdapter = new TsyringeAdapter(container);

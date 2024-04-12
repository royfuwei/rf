import { inject, injectable } from 'tsyringe';
import { IDemoRepository } from '../../demo';
import { IAppUseCase } from '../types/app.interface';
import { INJECT_DEMO_REPO } from '../../const';
import { TestData } from '@rfjs/common';

@injectable()
export class AppUsecase implements IAppUseCase {
  constructor(
    @inject(INJECT_DEMO_REPO)
    private demoRepo: IDemoRepository,
  ) {}

  async getTestData(): Promise<TestData[]> {
    return this.demoRepo.getTests();
  }
}
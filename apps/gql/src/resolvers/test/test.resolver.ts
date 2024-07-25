import { inject, injectable } from 'tsyringe';
import { Query, Resolver } from 'type-graphql';
import { AppUsecase } from '@rfjs/modules';
import { Test } from '../test/test.gql.type';

@injectable()
@Resolver(() => Test)
export class TestResolver {
  constructor(
    @inject(AppUsecase) private appUCase: AppUsecase,
  ) {}

  @Query((of) => [Test])
  async tests() {
    const data = await this.appUCase.getTestData();
    return data;
  }
}

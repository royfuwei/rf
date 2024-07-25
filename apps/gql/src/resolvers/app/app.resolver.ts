import { inject, injectable } from 'tsyringe';
import { FieldResolver, Query, Resolver } from 'type-graphql';
import { App } from './app.gql.type';
import configs from '../../configs';
import { AppUsecase, DemoRepository, INJECT_DEMO_REPO } from '@rfjs/modules';
import { Test } from '../test/test.gql.type';

@injectable()
@Resolver(() => App)
export class AppResolver {
  constructor(
    @inject(AppUsecase) private appUCase: AppUsecase,
    @inject(INJECT_DEMO_REPO)
    private demoRepo: DemoRepository,
  ) {}
  
  @Query((of) => App)
  async app() {
    return {
      uuid: '',
      environment: configs.env,
    };
  }

  @FieldResolver((of) => [Test], { nullable: true })
  async tests() {
    const data = this.demoRepo.dataLoaderFindByKeyId('6603b34caf27362c86b747fd', 'id');
    return data;
  }
}

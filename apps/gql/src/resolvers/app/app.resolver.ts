import { inject, injectable } from 'tsyringe';
import { FieldResolver, Query, Resolver } from 'type-graphql';
import { App } from './app.gql.type';
import configs from '../../configs';
import { AppUsecase } from '@rfjs/modules';
import { Test } from '../test/test.gql.type';

@injectable()
@Resolver(() => App)
export class AppResolver {
  constructor(
    @inject(AppUsecase) private appUCase: AppUsecase,
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
    const data = await this.appUCase.getTestData();
    return data;
  }
}

import { injectable } from 'tsyringe';
import { Query, Resolver } from 'type-graphql';
import { App } from './app.gql.type';
import configs from '../../configs';

@injectable()
@Resolver(() => App)
export class AppResolver {
  @Query((of) => App)
  async app() {
    return {
      uuid: '',
      environment: configs.env,
    };
  }
}

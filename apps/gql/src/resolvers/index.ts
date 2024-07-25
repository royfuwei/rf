import { AppResolver } from './app/app.resolver';
import { TestResolver } from './test/test.resolver';

export const resolvers = [AppResolver, TestResolver] as const;

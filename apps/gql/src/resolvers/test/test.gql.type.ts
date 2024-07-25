import { TestData } from '@rfjs/common';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Test implements TestData {
  @Field(() => String)
  id: string;

  @Field(() => String)
  uuid: string;

  @Field(() => String)
  value: string;

  @Field(() => Date)
  updatedAt?: Date;

  @Field(() => Date)
  createdAt?: Date;
}

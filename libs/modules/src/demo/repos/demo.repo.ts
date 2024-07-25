import { BaseMonogoClient, testSchema } from "@rfjs/repos";
import { inject, injectable } from "tsyringe";
import { INJECT_MONGO_CLIENT } from "../../const";
import { IDemoRepository } from "../type";
import { Model } from "mongoose";
import { BaseMongooseRepository, TestData } from "@rfjs/common";

@injectable()
export class DemoRepository extends BaseMongooseRepository<TestData> implements IDemoRepository {
    model: Model<TestData> = this.client.connection.model<TestData>('tests', testSchema);
    constructor(
      @inject(INJECT_MONGO_CLIENT)
      private client: BaseMonogoClient,
    ) {
      super();
    }

    async getTests() {
      const tests = await this.model.find();
      const data = tests.map((test) => test.toJSON());
      return data;
    }
}

@injectable()
export class MockDemoRepository implements IDemoRepository {
    async getTests() {
      return [
        {
          id: '1',
          uuid: '1',
          value: 'test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ];
    }
}
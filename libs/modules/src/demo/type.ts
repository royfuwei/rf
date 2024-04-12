import { TestData } from "@rfjs/common";

export interface IDemoRepository {
  getTests(): Promise<TestData[]>;
}
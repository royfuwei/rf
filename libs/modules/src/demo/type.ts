import { TestData } from "@rfjs/repos";

export interface IDemoRepository {
  getTests(): Promise<TestData[]>;
}
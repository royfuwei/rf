import { CreatedAtDocument, UpdatedAtDocument } from '../mongodb';

export type Test = {
  uuid: string;
  value: string;
} & UpdatedAtDocument &
  CreatedAtDocument;

export type TestData = {
  id: string;
} & Test;

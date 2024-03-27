import { Schema } from 'mongoose';

export interface ITest extends Document {
  uuid: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

export const TestSchema = new Schema({
  uuid: { type: String, required: true },
  value: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

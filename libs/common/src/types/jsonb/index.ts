import { ValueType } from "../data";

export type JsonbDataType =
  | 'string'
  | 'numeric'
  | 'date'
  | 'boolean'
  | 'objectString'
  | 'objectBoolean'
  | 'objectNumeric'
  | 'objectDate'
  | 'arrayString'
  | 'arrayNumeric'
  | 'arrayDate'
  | 'arrayBoolean'
  | 'arrayObjectString'
  | 'arrayObjectBoolean'
  | 'arrayObjectNumeric'
  | 'arrayObjectDate';

export type JsonbValueTransfer = {
  [key in JsonbDataType]: () => ValueType;
};
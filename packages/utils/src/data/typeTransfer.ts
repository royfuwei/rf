import { DataType, MgoDataType, ValueType } from '@rfjs/common';
import _ = require('lodash');
import { toBoolean } from './boolean';

export const typeTransfer = (value: ValueType, type: MgoDataType | DataType): ValueType => {
  const transfer = {
    any: () => value,
    date: () => new Date(value as string | number),
    string: () => value,
    number: () => Number(value),
    integer: () => Number(value),
    boolean: () => toBoolean(value),
    regex: () => new RegExp(value as string),
  };
  if (!_.has(transfer, type)) type = 'any';
  return transfer[type]();
};

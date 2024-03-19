import { DataType } from '@rfjs/common';
import _ = require('lodash');

export const typeTransfer = (value: any, type: DataType) => {
  const transfer = {
    any: () => value,
    date: () => new Date(value as string | number),
    string: () => value,
    number: () => Number(value),
    integer: () => Number(value),
    boolean: () =>
      ['true', 'false'].includes(value as string)
        ? JSON.parse(value as string)
        : Boolean(value),
    regex: () => new RegExp(value as string),
  };
  if (!_.has(transfer, type)) type = 'any';
  return transfer[type]();
};

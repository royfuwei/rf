import { DataUtil } from '@rfjs/utils';
import { JsonbOperatorQuery, filterOperator } from './jsonbOperatorQuery';
import { JsonbDataType, ValueType } from '@rfjs/common';
import { FilterOperator } from './type';

export const toJsonbQuery = (
  jsonb: string,
  field: string,
  filter: FilterOperator,
  dataType: JsonbDataType,
  value: ValueType,
) => {
  const values = [].concat(value).map((el) => DataUtil.jsonbTypeTransfer(el, dataType));
  if (!Object.keys(filterOperator).includes(filter)) {
    return null;
  }
  return new JsonbOperatorQuery(jsonb, field, filter, dataType, values);
};

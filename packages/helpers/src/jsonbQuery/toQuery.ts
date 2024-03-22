import { JsonbOperatorQuery, filterOperator } from './jsonbOperatorQuery';
import { typeTransfer } from './transfer';
import { FilterOperator, DataType, JsonbValueType } from './type';

export const toJsonbQuery = (
  jsonb: string,
  field: string,
  filter: FilterOperator,
  dataType: DataType,
  value: JsonbValueType,
) => {
  const values = [].concat(value).map((el) => typeTransfer(dataType, el));
  if (!Object.keys(filterOperator).includes(filter)) {
    return null;
  }
  return new JsonbOperatorQuery(jsonb, field, filter, dataType, values);
};

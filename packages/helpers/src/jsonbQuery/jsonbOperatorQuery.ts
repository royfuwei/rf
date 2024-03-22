import {
  jsonbWhereAliasField,
  jsonbFromSql,
  jsonbFromAlias,
} from './jsonbFromWhere';
import {
  jsonbEqOperator,
  jsonbNeqOperator,
  jsonbIsNullOperator,
  jsonbIsNotNullOperator,
  jsonbContainsOperator,
  jsonbStartsWithOperator,
  jsonbEndsWithOperator,
  jsonbTermsOperator,
  jsonbRangeOperator,
  jsonbGteOperator,
  jsonbGtOperator,
  jsonbLteOperator,
  jsonbLtOperator,
} from './jsonbOperator';
import {
  ISqlQuery,
  DataType,
  JsonbValueType,
  FilterOperator,
  FilterOperatorQueryObj,
} from './type';
import { v4 as uuidv4 } from 'uuid';

export const filterOperator: FilterOperatorQueryObj = {
  contains: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbContainsOperator[_dataType](_jsonb, _field, _value),
  eq: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbEqOperator[_dataType](_jsonb, _field, _value),
  neq: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbNeqOperator[_dataType](_jsonb, _field, _value),
  isnull: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbIsNullOperator[_dataType](_jsonb, _field, _value),
  isnotnull: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbIsNotNullOperator[_dataType](_jsonb, _field, _value),
  startswith: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbStartsWithOperator[_dataType](_jsonb, _field, _value),
  endswith: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbEndsWithOperator[_dataType](_jsonb, _field, _value),
  terms: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbTermsOperator[_dataType](_jsonb, _field, _value),
  gte: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbGteOperator[_dataType](_jsonb, _field, _value),
  gt: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbGtOperator[_dataType](_jsonb, _field, _value),
  lte: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbLteOperator[_dataType](_jsonb, _field, _value),
  lt: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbLtOperator[_dataType](_jsonb, _field, _value),
  range: (
    _jsonb: string,
    _field: string,
    _dataType: DataType,
    _value: JsonbValueType,
  ) => jsonbRangeOperator[_dataType](_jsonb, _field, _value),
};

export class JsonbOperatorQuery implements ISqlQuery {
  private alias = uuidv4();
  fromAlias?: string | null | undefined;
  from: string | null | undefined;
  where: string | null | undefined;

  constructor(
    jsonb: string,
    field: string,
    filter: FilterOperator,
    dataType: DataType,
    value: JsonbValueType,
  ) {
    const aliasField = jsonbWhereAliasField[dataType](field, this.alias);
    this.fromAlias = jsonbFromAlias[dataType](field, this.alias);
    this.from = jsonbFromSql[dataType](jsonb, field);
    this.where = filterOperator[filter](jsonb, aliasField, dataType, value);
  }
}

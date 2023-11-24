import {
    JsonbContaintQuery,
    JsonbEqQuery,
    JsonbNeqQuery,
    JsonbIsNullQuery,
    JsonbIsNotNullQuery,
    JsonbStartsWithQuery,
    JsonbEndsWithQuery,
    JsonbTermsQuery,
    JsonbGteQuery,
    JsonbGtQuery,
    JsonbLteQuery,
    JsonbLtQuery,
    JsonbRangeQuery,
} from './jsonbOperatorQuery';
import { typeTransfer } from './transfer';
import {
    FilterOperator,
    DataType,
    JsonbValueType,
    FilterOperatorQuery,
} from './type';

export const toJsonbQuery = (
    jsonb: string,
    field: string,
    filter: FilterOperator,
    dataType: DataType,
    value: JsonbValueType,
) => {
    const values = [].concat(value).map((el) => typeTransfer(dataType, el));
    const filterOperator: FilterOperatorQuery = {
        contains: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbContaintQuery(_jsonb, _field, _dataType, _value),
        eq: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbEqQuery(_jsonb, _field, _dataType, _value[0]),
        neq: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbNeqQuery(_jsonb, _field, _dataType, _value[0]),
        isnull: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbIsNullQuery(_jsonb, _field, _dataType, _value[0]),
        isnotnull: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbIsNotNullQuery(_jsonb, _field, _dataType, _value[0]),
        startswith: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbStartsWithQuery(_jsonb, _field, _dataType, _value[0]),
        endswith: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbEndsWithQuery(_jsonb, _field, _dataType, _value[0]),
        terms: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbTermsQuery(_jsonb, _field, _dataType, _value),
        gte: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbGteQuery(_jsonb, _field, _dataType, _value[0]),
        gt: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbGtQuery(_jsonb, _field, _dataType, _value[0]),
        lte: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbLteQuery(_jsonb, _field, _dataType, _value[0]),
        lt: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbLtQuery(_jsonb, _field, _dataType, _value[0]),
        range: (
            _jsonb: string,
            _field: string,
            _dataType: DataType,
            _value: JsonbValueType,
        ) => new JsonbRangeQuery(_jsonb, _field, _dataType, _value),
    };
    if (!Object.keys(filterOperator).includes(filter)) {
        return null;
    }
    return filterOperator[filter](jsonb, field, dataType, values);
};

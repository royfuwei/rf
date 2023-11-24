/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISqlQuery {
    fromAlias?: string | null;
    from?: string | null;
    where?: string | null;
}

export type FilterQueryMetadata = {
    logic: LogicalOperator;
    filters: (QueryMetadata | FilterQueryMetadata)[];
};

export type QueryMetadata = {
    field: string;
    dataType: DataType;
    operator:
        | DefaultFilterOperator
        | TextFilterOperator
        | NumericFilterOperator
        | DateFilterOperator
        | BooleanFilterOperator;
    value: JsonbValueType;
};

export type JsonbValueType =
    | string
    | string[]
    | number
    | number
    | number[]
    | Date
    | Date[]
    | boolean
    | boolean[]
    | any;

export type JsonbValueTransfer = {
    [key in DataType]: () => JsonbValueType;
};

export type JsonbOperatorToSqlObj = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in DataType]: (
        _jsonb: string,
        _field: string,
        _value: any,
    ) => string | null;
};

export type JsonbWhereAliasFieldObj = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in DataType]: (_field: string, _alias: string) => string;
};

export type JsonbFromSqlObj = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in DataType]: (_jsonb: string, _field: string) => string | null;
};
export type JsonbFromAliasObj = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in DataType]: (_field: string, _alias: string) => string | null;
};

export type DataType =
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

// export type LogicalOperator = 'and' | 'or' | 'nor';
export type LogicalOperator = 'and' | 'or';

export type DefaultFilterOperator = 'eq' | 'neq' | 'isnull' | 'isnotnull';

export type TextFilterOperator =
    | (DefaultFilterOperator & 'contains')
    | 'contains'
    | 'startswith'
    | 'endswith'
    | 'terms';

export type NumericFilterOperator =
    | (DefaultFilterOperator & 'gt')
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'range'
    | 'terms';

export type DateFilterOperator =
    | (DefaultFilterOperator & 'gt')
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'range'
    | 'terms';

export type BooleanFilterOperator = DefaultFilterOperator;

export type FilterOperator =
    | DefaultFilterOperator
    | TextFilterOperator
    | NumericFilterOperator
    | DateFilterOperator
    | BooleanFilterOperator;

export type FilterOperatorQuery = {
    [key in FilterOperator]: (
        _jsonb: string,
        _field: string,
        _dataType: DataType,
        _value: JsonbValueType,
    ) => ISqlQuery;
};

export type FilterOperatorQueryObj = {
    [key in FilterOperator]: (
        _jsonb: string,
        _field: string,
        _dataType: DataType,
        _value: JsonbValueType,
    ) => string | null;
};

import {
  BooleanFilterOperator,
  DefaultFilterOperator,
  LogicalOperator,
  NumericFilterOperator,
  TextFilterOperator,
  ValueType,
} from '@rfjs/common';

export type FilterMatchQuery = {
  logic: LogicalOperator;
  filters: (MatchQueryMetadata | FilterMatchQuery)[];
};

export type MatchQueryDataType = 'string' | 'numeric' | 'boolean';

export type MatchQueryMetadata = {
  field: string;
  dataType: MatchQueryDataType; // DataType
  operator:
    | DefaultFilterOperator
    | TextFilterOperator
    | NumericFilterOperator
    // | DateFilterOperator
    | BooleanFilterOperator;
  value: ValueType;
};

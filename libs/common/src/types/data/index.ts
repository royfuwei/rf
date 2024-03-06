export type LogicalOperator = 'and' | 'or' | 'nor' | 'not';


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

export type ValueType =
    | string
    | string[]
    | number
    | number[]
    | Date
    | Date[]
    | boolean
    | boolean[]
    | any;

export type DataType = "string" 
  | "number" 
  | "boolean" 
  | "any" 
  | "integer" 
  | "date";
  // | "regex";

export type ObjectData = {
  [key: string]: ValueType;
}
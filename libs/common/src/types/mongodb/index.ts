export * from './mongodb.type';

export type MgoConditionType = 'term' | 'terms' | 'range' | 'regex' | 'gt' | 'gte' | 'lt' | 'lte';
export type MgoDataType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'any'
  | 'integer'
  | 'date'
  | "regex";
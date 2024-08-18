import { DataType, ValueType } from '../data';

export type MgoConditionType =
  | 'term'
  | 'terms'
  | 'range'
  | 'regex'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'eq'
  | 'neq'
  | 'nin';
export type MgoDataType = DataType | 'regex';

export enum EnumMgoLogicalOperator {
  AND = '$and',
  NOR = '$nor',
  OR = '$or',
}

export type MgoLogicalOperator = 'and' | 'or' | 'nor';

export type MgoFilterMetadata = {
  logic: MgoLogicalOperator;
  filters: (MgoFilterMetadata | MgoFieldCondition)[];
};

export type MgoFieldCondition = {
  field: string;
  dataType: MgoDataType;
  condition: MgoConditionType;
  value: ValueType;
};

const mgoFilterMetadataKey = ['logic', 'filters'] as const;
type MgoFilterMetadataType = (typeof mgoFilterMetadataKey)[number];
export const isMgoFilterMetadataType = (
  obj: any,
): obj is MgoFilterMetadataType =>
  Object.keys(obj).every((key) =>
    mgoFilterMetadataKey.includes(key as MgoFilterMetadataType),
  );

const mgoFieldConditionKey = [
  'field',
  'dataType',
  'condition',
  'value',
] as const;
type MgoFieldConditionType = keyof MgoFieldCondition;
export const isMgoFieldConditionType = (
  obj: any,
): obj is MgoFieldConditionType =>
  Object.keys(obj).every((key) =>
    mgoFieldConditionKey.includes(key as MgoFieldConditionType),
  );

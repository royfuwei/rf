import { ObjectData } from '@rfjs/common';
import { convertAliasData } from '../regex';
import { filterMatchQueryData } from './filterMatchQueryData';
import { FilterMatchQuery } from './type';
import _ = require('lodash');

export function filterMappingMatchQueryData<T>(
  filterData: any[],
  filterMetadatas: FilterMappingMetadata[],
  exData: ObjectData = {},
  dataKey = 'data',
) {
  if (filterMetadatas.length == 0) {
    return filterData as T[];
  }
  const matchUserOrderItemMap = filterMetadatas.reduce((pre, cur) => {
    const { filter, mappings } = cur;
    for (const item of filterData) {
      const _item = _.cloneDeep(item);
      const data: ObjectData = {
        ...exData,
        [dataKey]: item,
      };
      const convertFilter = convertAliasData<FilterMatchQuery>(
        _.cloneDeep(filter),
        data,
      );
      const convertMapping = convertAliasData<MappingValue[]>(
        _.cloneDeep(mappings ?? []),
        data,
      );
      if (filterMatchQueryData(data, convertFilter)) {
        const matchData = genItemMappingData(dataKey, data, convertMapping);
        pre.set(_item, matchData);
      }
    }
    return pre;
  }, new Map<number, T>());

  return Array.from(matchUserOrderItemMap.values());
}

function genItemMappingData(
  dataKey: string,
  data: ObjectData,
  mappings: MappingValue[],
) {
  const runMapping = {
    values: (
      _dataKey: string,
      _key: string,
      _data: ObjectData,
      _value: string | number | MappingObject[],
    ) => genMappingDataByValue(_dataKey, _key, _data, _value),
    value: (
      _dataKey: string,
      _key: string,
      _data: ObjectData,
      _value: string | number | MappingObject[],
    ) => genMappingDataByValue(_dataKey, _key, _data, _value),
  };
  for (const mapping of mappings) {
    const { type, key, value } = mapping;
    runMapping[type](dataKey, key, data, value);
  }
  return _.get(data, dataKey);
}

function genMappingDataByValue(
  dataKey: string,
  key: string,
  data: ObjectData,
  value: string | number | MappingObject[],
) {
  data[dataKey][key] = value;
}

export type FilterMappingMetadata = {
  filter: FilterMatchQuery;
  mappings?: MappingValue[];
};

export type MappingType = 'value';
export type MappingObject = {
  mappingKey?: string;
  value?: string | number;
};

export type MappingValue = {
  key: string;
  type: MappingType;
  value: string | number | MappingObject[];
};

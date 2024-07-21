import _ = require('lodash');
import { ObjectData } from '@rfjs/common';
import { aliasValue } from '.';
import { flatten } from '../object';

export function aliasData<T>(
  aliasData: ObjectData,
  source: ObjectData,
): T {
  const flattenAlias = flatten(aliasData);
  for (const [key, value] of Object.entries(flattenAlias)) {
    if (!_.isString(value)) continue;
    const getAliasValue = aliasValue(value, source);
    if (_.isUndefined(getAliasValue)) continue;
    _.set(aliasData, key, getAliasValue);
  }
  return aliasData as T;
}

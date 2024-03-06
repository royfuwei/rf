import { ObjectData } from "@rfjs/common";
import _ = require("lodash");

export function convertAliasData<T>(
  data: ObjectData | ObjectData[],
  aliasSource: ObjectData,
): T {
  const aliasRegex = /\$\{([A-Za-z\.\_\-\,0-9]+)\}|\$([A-Za-z\.\_\-\,0-9]+)/g;
  let dataStr = JSON.stringify(data);
  const matchAll = [...dataStr.matchAll(aliasRegex)];
  for (const regex of matchAll) {
    if (_.isUndefined(regex) || _.isNull(regex)) continue;
    const origValue = regex[0];
    const aliasPath = regex[1] ?? regex[2];
    if (_.isUndefined(aliasPath) || _.isUndefined(origValue)) continue;
    const aliasData = _.get(aliasSource, aliasPath);
    const aliasDataStr = JSON.stringify(_.isUndefined(aliasData) ? null : aliasData);
    dataStr = dataStr.replace(`"${origValue}"`, aliasDataStr);
  }
  return JSON.parse(dataStr)
}
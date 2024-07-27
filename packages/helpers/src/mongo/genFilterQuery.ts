import { EnumMgoLogicalOperator, isMgoFieldConditionType, isMgoFilterMetadataType, MgoFieldCondition, MgoFilterMetadata } from "@rfjs/common";
import { LogicalQuery } from "./query";
import { toQuery } from "./toQuery";

/**
 * Dynamic generate mongo nested query from filterMetadata
 * 
 * @example
 * {
 *   logic: 'and',
 *   filters: [
 *     {
 *       field: 'name',
 *       condition: 'eq',
 *       dataType: 'string',
 *       value: 'test'
 *     },
 *     {
 *       logic: 'or',
 *       filters: [
 *         {
 *           field: 'age',
 *           condition: 'gt',
 *           dataType: 'number',
 *           value: 18
 *         },
 *         {
 *           field: 'address',
 *           condition: 'eq',
 *           dataType: 'string',
 *           value: null
 *         }
 *       ]
 *     }
 *   ]
 * }
 * 
 * @param filterMetadata MgoFilterMetadata
 * @returns 
 * {"$and":[{"name":{"$eq":"test"}},{"$or":[{"age":{"$gt":18}},{"address":{"$eq":null}}]}]} 
 */
export function genFilterQuery(
  filterMetadata: MgoFilterMetadata,
) {
  const { logic, filters } = filterMetadata;
  const operatorKey = logic.toLocaleUpperCase() as keyof typeof EnumMgoLogicalOperator;
  const operator = EnumMgoLogicalOperator[operatorKey] ?? EnumMgoLogicalOperator.AND;
  const query = filters.reduce((pre, cur) => {
    if (!pre[operator]) {
      pre[operator] = [];
    }
    if (isMgoFilterMetadataType(cur as MgoFilterMetadata)) {
      const nestedQuery = genFilterQuery(cur as MgoFilterMetadata);
      pre[operator]?.push(nestedQuery);
    }
    if (isMgoFieldConditionType(cur as MgoFieldCondition)) {
      const { field, condition, dataType, value } = cur as MgoFieldCondition;
      const genQuery = toQuery(field, dataType, condition, value);
      pre[operator]?.push(genQuery);
    }
    return pre;
  }, (new LogicalQuery()));
  return query;
}

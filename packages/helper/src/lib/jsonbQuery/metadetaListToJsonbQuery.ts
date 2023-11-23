import { toJsonbQuery } from "./toQuery";
import { ISqlQuery, QueryMetadata } from "./type";

export const metadetaListToJsonbQuery = (jsonb: string, queryMetadataList: QueryMetadata[]) => {
    return queryMetadataList.reduce((pre, cur) => {
        pre.push(toJsonbQuery(jsonb, cur.field, cur.operator, cur.dataType, cur.value));
        return pre;
    }, <ISqlQuery[]>[]);
};

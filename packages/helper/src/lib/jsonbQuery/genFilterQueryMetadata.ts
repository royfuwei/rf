import { toJsonbQuery } from './toQuery';
import { FilterQueryMetadata, QueryMetadata } from './type';

export const genFilterQueryMetadata = (
    jsonb: string,
    filterQuery: FilterQueryMetadata,
    from: string[] = [],
) => {
    const { logic, filters } = filterQuery;
    const where = filters.reduce((pre, cur) => {
        if (
            (cur as FilterQueryMetadata).logic &&
            (cur as FilterQueryMetadata).filters.length > 0
        ) {
            const getNestedQuery = genFilterQueryMetadata(
                jsonb,
                cur as FilterQueryMetadata,
                from,
            );
            pre = `${pre.length > 0 ? `${pre} ${logic} ` : ''}(${
                getNestedQuery.where
            })`;
            return pre;
        }
        const metadata = cur as QueryMetadata;
        const query = toJsonbQuery(
            jsonb,
            metadata.field,
            metadata.operator,
            metadata.dataType,
            metadata.value,
        );
        if (!query) {
            return pre;
        }
        if (query.from && query.fromAlias) {
            from.push(`${query.from} ${query.fromAlias}`);
        }
        pre = `${pre}${
            query.where
                ? `${pre.length > 0 ? ` ${logic}` : ''} ${query.where}`
                : ''
        }`;
        return pre;
    }, '');
    return {
        where,
        from,
    };
};

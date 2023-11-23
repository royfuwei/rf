/* eslint-disable @typescript-eslint/no-unused-vars */
import { JsonbWhereAliasFieldObj, JsonbFromSqlObj } from "./type";

export const jsonbFromSql: JsonbFromSqlObj = {
    arrayObjectString: (_jsonb: string, _field: string, _alias: string) => `jsonb_to_recordset(${_jsonb} -> ${getFieldRouter(_field)}) as "${_alias}"("${getRouterField(_field)}" text)`,
    arrayObjectNumeric: (_jsonb: string, _field: string, _alias: string) => `jsonb_to_recordset(${_jsonb} -> ${getFieldRouter(_field)}) as "${_alias}"("${getRouterField(_field)}" numeric)`,
    arrayObjectDate: (_jsonb: string, _field: string, _alias: string) => `jsonb_to_recordset(${_jsonb} -> ${getFieldRouter(_field)}) as "${_alias}"("${getRouterField(_field)}" text)`,
    arrayObjectBoolean: (_jsonb: string, _field: string, _alias: string) => `jsonb_to_recordset(${_jsonb} -> ${getFieldRouter(_field)}) as "${_alias}"("${getRouterField(_field)}" boolean)`,
    objectString: (_jsonb: string, _field: string, _alias: string) => `jsonb_to_record(${_jsonb} -> ${getFieldRouter(_field)}) as "${_alias}"("${getRouterField(_field)}" text)`,
    objectNumeric: (_jsonb: string, _field: string, _alias: string) => `jsonb_to_record(${_jsonb} -> ${getFieldRouter(_field)}) as "${_alias}"("${getRouterField(_field)}" numeric)`,
    objectDate: (_jsonb: string, _field: string, _alias: string) => `jsonb_to_record(${_jsonb} -> ${getFieldRouter(_field)}) as "${_alias}"("${getRouterField(_field)}" text)`,
    objectBoolean: (_jsonb: string, _field: string, _alias: string) => `jsonb_to_record(${_jsonb} -> ${getFieldRouter(_field)}) as "${_alias}"("${getRouterField(_field)}" boolean)`,
    arrayString: (_jsonb: string, _field: string, _alias: string) => `jsonb_array_elements_text(${_jsonb} -> '${_field}') as "${_alias}"`,
    arrayNumeric: (_jsonb: string, _field: string, _alias: string) => `jsonb_array_elements_text(${_jsonb} -> '${_field}') as "${_alias}"`,
    arrayDate: (_jsonb: string, _field: string, _alias: string) => `jsonb_array_elements_text(${_jsonb} -> '${_field}') as "${_alias}"`,
    arrayBoolean: (_jsonb: string, _field: string, _alias: string) => `jsonb_array_elements_text(${_jsonb} -> '${_field}') as "${_alias}"`,
    string: (_jsonb: string, _field: string, _alias: string) => null,
    boolean: (_jsonb: string, _field: string, _alias: string) => null,
    numeric: (_jsonb: string, _field: string, _alias: string) => null,
    date: (_jsonb: string, _field: string, _alias: string) => null,
};

export const jsonbWhereAliasField: JsonbWhereAliasFieldObj = {
    objectString: (_field: string, _alias: string) => `"${_alias}"."${getRouterField(_field)}"`,
    objectNumeric: (_field: string, _alias: string) => `"${_alias}"."${getRouterField(_field)}"`,
    objectDate: (_field: string, _alias: string) => `"${_alias}"."${getRouterField(_field)}"`,
    objectBoolean: (_field: string, _alias: string) => `"${_alias}"."${getRouterField(_field)}"`,
    arrayObjectString: (_field: string, _alias: string) => `"${_alias}"."${getRouterField(_field)}"`,
    arrayObjectNumeric: (_field: string, _alias: string) => `"${_alias}"."${getRouterField(_field)}"`,
    arrayObjectDate: (_field: string, _alias: string) => `"${_alias}"."${getRouterField(_field)}"`,
    arrayObjectBoolean: (_field: string, _alias: string) => `"${_alias}"."${getRouterField(_field)}"`,
    arrayString: (_field: string, _alias: string) => `"${_alias}"`,
    arrayDate: (_field: string, _alias: string) => `"${_alias}"`,
    arrayNumeric: (_field: string, _alias: string) => `"${_alias}"`,
    arrayBoolean: (_field: string, _alias: string) => `"${_alias}"`,
    string: (_field: string, _alias: string) => _field,
    date: (_field: string, _alias: string) => _field,
    numeric: (_field: string, _alias: string) => _field,
    boolean: (_field: string, _alias: string) => _field,
};

export const getRouterField = (_field: string) => {
    const fieldSplit = _field.split('.');
    return fieldSplit[fieldSplit.length - 1]
};

export const getFieldRouter = (_field: string) => {
    const fieldSplit = _field.split('.');
    const router = fieldSplit
        .slice(0, fieldSplit.length - 1)
        .map((i) => `'${i}'`)
        .join('->');
    return router;
}
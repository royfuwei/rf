import { DataType, JsonbValueTransfer, JsonbValueType } from './type';

const toDateString = (value: string | number) => new Date(value).toISOString();
const toBoolean = (value: boolean | string) =>
    ['true', 'false'].includes(value as string)
        ? JSON.parse(value as string)
        : Boolean(value);
export const typeTransfer = (
    type: DataType,
    value: JsonbValueType,
): JsonbValueType => {
    const transfer: JsonbValueTransfer = {
        string: () => value,
        numeric: () => Number(value),
        date: () => toDateString(value),
        boolean: toBoolean(value),
        objectString: () => value,
        objectNumeric: () => Number(value),
        objectDate: () => toDateString(value),
        objectBoolean: toBoolean(value),
        arrayString: () => value,
        arrayNumeric: () => Number(value),
        arrayDate: () => toDateString(value),
        arrayBoolean: toBoolean(value),
        arrayObjectString: () => value,
        arrayObjectNumeric: () => Number(value),
        arrayObjectDate: () => toDateString(value),
        arrayObjectBoolean: toBoolean(value),
    };
    if (!Object.keys(transfer).includes(type)) type = 'string';
    return transfer[type]();
};

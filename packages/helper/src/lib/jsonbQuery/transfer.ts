import { DataType, JsonbValueTransfer, JsonbValueType } from "./type";

export const typeTransfer = (
    type: DataType,
    value: JsonbValueType
): JsonbValueType => {
    const transfer: JsonbValueTransfer = {
        date: () => new Date(value as string | number),
        objectDate: () => new Date(value as string | number),
        arrayDate: () => new Date(value as string | number),
        arrayObjectDate: () => new Date(value as string | number),
        string: () => value,
        arrayString: () => value,
        arrayObjectString: () => value,
        objectString: () => value,
        numeric: () => Number(value),
        objectNumeric: () => Number(value),
        arrayNumeric: () => Number(value),
        arrayObjectNumeric: () => Number(value),
        boolean: () => (['true', 'false'].includes(value as string) ? JSON.parse(value as string) : Boolean(value)),
        objectBoolean: () => (['true', 'false'].includes(value as string) ? JSON.parse(value as string) : Boolean(value)),
        arrayBoolean: () => (['true', 'false'].includes(value as string) ? JSON.parse(value as string) : Boolean(value)),
        arrayObjectBoolean: () => (['true', 'false'].includes(value as string) ? JSON.parse(value as string) : Boolean(value)),
    };
    if (!Object.keys(transfer).includes(type)) type = 'string';
    return transfer[type]();
}
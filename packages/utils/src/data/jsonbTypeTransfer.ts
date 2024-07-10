import { JsonbDataType, JsonbValueTransfer, ValueType } from "@rfjs/common";
import { toDateString } from "./date";
import { toBoolean } from "./boolean";

export const jsonbTypeTransfer = (
  value: ValueType,
  type: JsonbDataType,
): ValueType => {
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

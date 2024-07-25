import { MgoConditionType, MgoDataType, ValueType } from '@rfjs/common';
import { typeTransfer } from 'packages/utils/src/data';
import {
  TermsQuery,
  RegexQuery,
  RangeQuery,
  GTQuery,
  LTQuery,
  GTEQuery,
  LTEQuery,
} from './mongoQuery';

export function toQuery(
  field: string,
  type: MgoDataType,
  condition: MgoConditionType,
  value: ValueType,
) {
  const values = [].concat(value).map((i) => typeTransfer(i, type));
  const terms = (_field: string, _values: Array<any>) => {
    return new TermsQuery(_field, _values);
  };
  const term = terms;
  const range = (_field: string, _values: Array<number | Date>) => {
    const [start, end] = _values;
    return new RangeQuery(_field, start, end);
  };
  const gt = (_field: string, _values: Array<number | Date>) => {
    const [value] = _values;
    return new GTQuery(_field, value);
  };
  const gte = (_field: string, _values: Array<number | Date>) => {
    const [value] = _values;
    return new GTEQuery(_field, value);
  };
  const lt = (_field: string, _values: Array<number | Date>) => {
    const [value] = _values;
    return new LTQuery(_field, value);
  };
  const lte = (_field: string, _values: Array<number | Date>) => {
    const [value] = _values;
    return new LTEQuery(_field, value);
  };
  const regex = (_field: string, _values: Array<RegExp>) => {
    const [_value] = _values;
    return new RegexQuery(_field, _value);
  };
  return {
    terms,
    term,
    gt,
    gte,
    lt,
    lte,
    regex,
    range,
  }[condition](field, values);
}

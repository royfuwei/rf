import { ValueType } from '@rfjs/common';

export class TermsQuery {
  [field: string]: {
    $in: Array<ValueType>;
  };
  constructor(field: string, values: Array<ValueType>) {
    this[field] = { $in: values };
  }
}

export class RegexQuery {
  [field: string]: RegExp;
  constructor(field: string, pattern: RegExp) {
    this[field] = pattern;
  }
}

export class RangeQuery {
  [field: string]: {
    $gte: number | Date;
    $lte: number | Date;
  };
  constructor(field: string, start: number | Date, end: number | Date) {
    this[field] = { $gte: start, $lte: end };
  }
}

export class LTQuery {
  [field: string]: {
    $lt: number | Date;
  };
  constructor(field: string, value: number | Date) {
    this[field] = { $lt: value };
  }
}

export class LTEQuery {
  [field: string]: {
    $lte: number | Date;
  };
  constructor(field: string, value: number | Date) {
    this[field] = { $lte: value };
  }
}

export class GTQuery {
  [field: string]: {
    $gt: number | Date;
  };
  constructor(field: string, value: number | Date) {
    this[field] = { $gt: value };
  }
}

export class GTEQuery {
  [field: string]: {
    $gte: number | Date;
  };
  constructor(field: string, value: number | Date) {
    this[field] = { $gte: value };
  }
}

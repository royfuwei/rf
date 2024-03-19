/**
 * convert nested object to flat object
 * @example
 * ```
 * const nestedObj =
 * {
 *  a: 1,
 *  b: {
 *      c: 10,
 *      d: 9
 *  }
 * }
 *
 * flatten(nestedObj)
 * result:
 * {
 *  a: 1,
 *  'b.c': 10,
 *  'b.d': 9
 * }
 * ```
 * @param nestedObj object
 * @param prefix optional
 * @returns
 */
export function flatten(nestedObj: object, prefix?: string) {
  return Object.entries(nestedObj).reduce((target, cur) => {
    const [key, value] = cur;
    const thisKey = prefix ? [prefix, key].join('.') : key;
    if (typeof value === 'object') {
      Object.assign(target, flatten(value, thisKey));
    } else {
      Object.assign(target, { [`${thisKey}`]: value });
    }
    return target;
  }, {});
}

/**
 * convert string[] keys to nested object
 * @example
 * ```
 * keys: ['a', 'b'], value: 10
 * return { a: { b: 10 } }
 * ```
 * @param keys key of string[]
 * @param value nested value
 * @returns nested object
 */
export function keysToNested(
  keys: string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: any = {},
  depth = 0,
) {
  const isLastDepth = depth == keys.length - 1;
  const key = keys[depth];
  if (!isLastDepth) {
    const result = keysToNested(keys, value, target[key], ++depth);
    target[key] = result;
  } else {
    target[key] = value;
  }
  return target;
}

/**
 * convert object to Json string
 * @param obj object
 * @param _isPretty
 * @returns
 */
export function toJSONString(obj: object, _isPretty = false): string {
  if (_isPretty) {
    return JSON.stringify(obj, null, 2);
  }
  return JSON.stringify(obj);
}

/**
 * convert nested object to flat string
 * @example
 * ```
 * const obj = { a: { b: 10 }, b: 'abc' }
 * result: 'a.b: 10, b: abc'
 * ```
 * @param obj object
 * @returns flat object string
 */
export function toFlatString(obj: object) {
  return Object.entries(flatten(obj))
    .reduce(
      (pre, cur) => {
        const [key, value] = cur;
        pre.push(`${key}: ${value}`);
        return pre;
      },
      <string[]>[],
    )
    .join(', ');
}

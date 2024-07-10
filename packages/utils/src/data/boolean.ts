export const toBoolean = (value: boolean | string) =>
  ['true', 'false'].includes(value as string)
    ? JSON.parse(value as string)
    : Boolean(value);
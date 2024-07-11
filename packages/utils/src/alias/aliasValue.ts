import { ObjectData } from "@rfjs/common";
import { aliasRegex } from ".";
import { flatten } from "../object";

export const aliasValue = (
  alias: string,
  data: ObjectData,
) => {
  const matchAll = [...alias.matchAll(aliasRegex)];
  const aliasData: ObjectData = {
    ...data,
    ...flatten(data),
  }
  let aliasValue = undefined;
  for (const regex of matchAll) {
    const key = regex[1] || regex[2];
    const value = aliasData[key];
    if (value !== undefined) {
      aliasValue = value;
      break;
    }
  }
  return aliasValue;
}

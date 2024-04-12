import { ApiResData, ApiResPaginated } from '@rfjs/common';

export const jsonData = <T>(
  data: T | null,
  status = 200,
  success = true,
): ApiResData<T> => {
  return {
    success,
    status,
    data,
  };
};

export const jsonDataList = <T>(
  data: T[],
  status = 200,
  success = true,
): ApiResData<T> => {
  return {
    success,
    status,
    data,
  };
};

export const jsonPaginated = <T>(
  data: T[],
  total: number,
  status = 200,
  success = true,
): ApiResPaginated<T> => {
  return {
    success,
    status,
    total,
    data,
  };
};

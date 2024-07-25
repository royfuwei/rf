import _ = require('lodash');
import DataLoader = require('dataloader');
import { FilterQuery, Model } from 'mongoose';

export abstract class BaseMongooseRepository<T> {
  abstract model: Model<T>;

  async dataLoaderFindByKeyId(id: string, key: keyof T) {
    const filter = { [key]: id } as FilterQuery<T>;
    if (!filter) {
      return [];
    }
    return this.findByOrQueryDataLoader.load(filter);
  }

  async dataLoaderFindById(id: string) {
    const filter = { id } as FilterQuery<T>;
    if (!filter) {
      return [];
    }
    return this.findByOrQueryDataLoader.load(filter);
  }

  /* data loader */
  private findByOrQueryDataLoader = new DataLoader(
    (filters: readonly FilterQuery<T>[]) => this.batchLoadFnByFilter(filters),
    {
      cache: false,
      batchScheduleFn: (callback) => setTimeout(callback, 100),
    },
  );

  private async batchLoadFnByFilter(
    filters: readonly FilterQuery<T>[],
    isOrFilter = true,
  ) {
    const mappingKeys = filters.map((filter) => JSON.stringify(filter));
    const keys = Object.keys(filters[0]);
    const filterMap = filters.reduce((acc, filter, index) => {
      for (const [key, value] of Object.entries(filter)) {
        const filter = acc.get(key) || {};
        filter[`$in`] = filter[`$in`] || [];
        filter[`$in`].push(value);
        acc.set(key, filter);
      }
      return acc;
    }, new Map<string, FilterQuery<T>>());
    const orFilters = Array.from(filterMap.entries()).reduce(
      (acc, [key, value]) => {
        const _key = key == 'id' ? '_id' : key;
        const inFilter = <FilterQuery<T>>{
          [_key]: value,
        };
        acc.push(inFilter);
        return acc;
      },
      <FilterQuery<T>[]>[],
    );

    const andFilter = Array.from(filterMap.entries()).reduce(
      (acc, [key, value]) => {
        const _key = key == 'id' ? '_id' : (key as keyof T);
        acc[_key] = value as any;
        return acc;
      },
      <FilterQuery<T>>{},
    );
    const query = isOrFilter
      ? ({ $or: orFilters } as FilterQuery<T>)
      : andFilter;
    const data = await this.model.find(query);
    const dataMap = data.reduce((pre, cur) => {
      const pick = _.pick(cur, keys);
      const key = JSON.stringify(pick);
      const arr = pre.get(key) ?? <T[]>[];
      arr.push(cur);
      pre.set(key, arr);
      return pre;
    }, new Map<string, T[]>());

    return mappingKeys.map((key) => dataMap.get(key) ?? []);
  }
}

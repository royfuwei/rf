import _ = require('lodash');
import { convertAliasData } from './index';
describe('convertAliasData', () => {
  const number = 10;
  const object = {
    A1: '1234',
    B2: 4321,
  };
  const string = 'testd';
  const array = [1, 'a', 'cd'];
  const alias = {
    number,
    object,
    string,
    array,
  };
  it('alias none', () => {
    const testData = {
      a: '123',
      test1: {
        alias: 'alias.object',
        d: 'alias.string',
      },
      c: 'alias.number',
      f: 'alias.array',
    };
    const result = convertAliasData(testData, { alias });
    const expectData = _.cloneDeep(testData);
    expect(result).toEqual(expectData);
  });

  it('alias ${}, $', () => {
    const testData = {
      a: '123',
      test1: {
        alias: '${alias.object}',
        d: '${alias.string}',
      },
      c: '$alias.number',
      f: '$alias.array',
    };
    const result = convertAliasData(testData, { alias });
    const expectData = _.cloneDeep(testData);
    _.set(expectData, 'test1.alias', object);
    _.set(expectData, 'test1.d', string);
    _.set(expectData, 'c', number);
    _.set(expectData, 'f', array);
    expect(result).toEqual(expectData);
  });
});

import { aliasValue } from './aliasValue';

describe('Test aliasValue', () => {
  
  describe('Test aliasValue 1 tier obj', () => {
    const data = {
      str1: 'str1',
      'str.2': 'str2',
      array: [1, 2, 3],
      emptyArray: [],
      null: null,
      undefined: undefined,
      one: 1,
      zero: 0,
    };
    it('Test aliasValue undefined key ${z}', () => {
      const alias = '${z}';
      const result = aliasValue(alias, data);
      expect(result).toBe(undefined);
    });

    it('Test aliasValue ${str1}', () => {
      const alias = '${str1}';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.str1);
    });
    
    it('Test aliasValue $str1', () => {
      const alias = '$str1';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.str1);
    });

    it('Test aliasValue ${str.2}', () => {
      const alias = '${str.2}';
      const result = aliasValue(alias, data);
      expect(result).toBe(data['str.2']);
    });

    it('Test aliasValue ${one}', () => {
      const alias = '${one}';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.one);
    });

    it('Test aliasValue $zero', () => {
      const alias = '$zero';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.zero);
    });

    it('Test aliasValue $emptyArray', () => {
      const alias = '$emptyArray';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.emptyArray);
    });

    it('Test aliasValue $array', () => {
      const alias = '$array';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.array);
    });

    it('Test aliasValue $null', () => {
      const alias = '$null';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.null);
    });

    it('Test aliasValue ${null}', () => {
      const alias = '${null}';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.null);
    });
  });
  describe('Test aliasValue nested data', () => {
    const data = {
      str: {
        str1: 'str1',
        'str.2': 'str2',
      },
      num: {
        one: 1,
        zero: 0,
      },
      arr: {
        array: [1, 2, 3],
        emptyArray: [],
      },
      obj: {
        str1: 'str1',
        'str.2': 'str2',
        array: [1, 2, 3],
        emptyArray: [],
        null: null,
        undefined: undefined,
        one: 1,
        zero: 0,
      }
    };
    it('Test aliasValue undefined nested key ${obj.z}', () => {
      const alias = '${obj.z}';
      const result = aliasValue(alias, data);
      expect(result).toBe(undefined);
    });

    it('Test aliasValue ${str.str1}', () => {
      const alias = '${str.str1}';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.str.str1);
    });
    it('Test aliasValue $str.str1', () => {
      const alias = '$str.str1';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.str.str1);
    });
    it('Test aliasValue ${str.str.2}', () => {
      const alias = '${str.str.2}';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.str['str.2']);
    });

    it('Test aliasValue $obj.null', () => {
      const alias = '$obj.null';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.obj.null);
    });

    it('Test aliasValue ${obj.null}', () => {
      const alias = '${obj.null}';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.obj.null);
    });

    it('Test aliasValue ${obj}', () => {
      const alias = '${obj}';
      const result = aliasValue(alias, data);
      expect(result).toBe(data.obj);
    });
  });
})

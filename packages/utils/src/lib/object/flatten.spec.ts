import { flatten } from '.';

describe('Test lib object flatten', () => {
    it('Test flatten 1', () => {
      const testObj = {
        a: 1,
        b: 10,
        c: 'a',
      };
      const result = flatten(testObj);
      const expectResult = {
          a: 1,
          b: 10,
          c: 'a',
      };
      expect(result).toEqual(expectResult);
    });
  
    it('Test flatten nest 1 obj v1', () => {
      const testObj = {
        a: 1,
        b: 10,
        c: {
          d: 10,
          e: 9,
        },
      };
      const result = flatten(testObj);
      const expectResult = {
          a: 1,
          b: 10,
          'c.d': 10,
          'c.e': 9
      };
      expect(result).toEqual(expectResult);
    });

    it('Test flatten nest 1 obj v2', () => {
      const testObj = {
        a: 1,
        c: {
          d: 10,
          e: 9,
        },
        b: 10,
      };
      const result = flatten(testObj);
      const expectResult = {
        a: 1, 'c.d': 10, 'c.e': 9, b: 10
      };
      expect(result).toEqual(expectResult);
    });

    it('Test flatten nest 2 obj v1', () => {
      const testObj = {
        a: 1,
        b: 10,
        c: {
          d: 10,
          e: {
            f: 'a',
            g: 'f',
          },
        },
      };
      const result = flatten(testObj);
      const expectResult = {
        a: 1, b: 10, 'c.d': 10, 'c.e.f': 'a', 'c.e.g': 'f'
      };
      expect(result).toEqual(expectResult);
    });

    it('Test flatten nest 2 obj v2', () => {
      const testObj = {
        a: 1,
        c: {
          d: 10,
          e: {
            f: 'a',
            g: 'f',
          },
        },
        b: 10,
      };
      const result = flatten(testObj);
      const expectResult = {
        a: 1,
        'c.d': 10,
        'c.e.f': 'a',
        'c.e.g': 'f',
        b: 10
      };
      expect(result).toEqual(expectResult);
    });
  
    it('Test flatten nest 2 obj v3', () => {
      const testObj = {
        a: 1,
        c: {
          e: {
            f: 'a',
            g: 'f',
          },
          d: 10,
        },
        b: 10,
      };
      const result = flatten(testObj);
      const expectResult = {
          'a': 1,
          'c.e.f': 'a',
          'c.e.g': 'f',
          'c.d': 10,
          'b': 10
      };
      expect(result).toEqual(expectResult);
    });

    it('Test flatten nest 3 obj v1', () => {
      const testObj = {
        a: 1,
        c: {
          e: {
            f: 'a',
            g: 'f',
          },
          d: 10,
          z: {
            f: 'a',
            g: {
              f: 'a',
              g: 'f',
            },
          },
        },
        b: 10,
      };
      const result = flatten(testObj);
      const expectResult = {
        a: 1,
        'c.e.f': 'a',
        'c.e.g': 'f',
        'c.d': 10,
        'c.z.f': 'a',
        'c.z.g.f': 'a',
        'c.z.g.g': 'f',
        b: 10
      };
      expect(result).toEqual(expectResult);
    });

    it('Test flatten nest 3 obj v1 prefix: _test', () => {
      const testObj = {
        a: 1,
        c: {
          e: {
            f: 'a',
            g: 'f',
          },
          d: 10,
          z: {
            f: 'a',
            g: {
              f: 'a',
              g: 'f',
            },
          },
        },
        b: 10,
      };
      const result = flatten(testObj, '_test');
      const expectResult = {
        '_test.a': 1,
        '_test.c.e.f': 'a',
        '_test.c.e.g': 'f',
        '_test.c.d': 10,
        '_test.c.z.f': 'a',
        '_test.c.z.g.f': 'a',
        '_test.c.z.g.g': 'f',
        '_test.b': 10
      };
      expect(result).toEqual(expectResult);
    });
});

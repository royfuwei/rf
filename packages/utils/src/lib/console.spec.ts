import { ConsoleObj } from './console';
describe('Test lib console', () => {
  it('Test ConsoleObj', () => {
    const testObj = {
      a: 1,
      b: 10,
      c: 'a',
    };
    const result = ConsoleObj(testObj);
    const expectResult = 'a: 1, b: 10, c: a';
    expect(result).toEqual(expectResult);
  });

  it('Test ConsoleObj nest 1 obj v1', () => {
    const testObj = {
      a: 1,
      b: 10,
      c: {
        d: 10,
        e: 9,
      },
    };
    const result = ConsoleObj(testObj);
    const expectResult = 'a: 1, b: 10, c.d: 10, c.e: 9';
    expect(result).toEqual(expectResult);
  });

  it('Test ConsoleObj nest 1 obj v2', () => {
    const testObj = {
      a: 1,
      c: {
        d: 10,
        e: 9,
      },
      b: 10,
    };
    const result = ConsoleObj(testObj);
    const expectResult = 'a: 1, c.d: 10, c.e: 9, b: 10';
    expect(result).toEqual(expectResult);
  });

  it('Test ConsoleObj nest 2 obj v1', () => {
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
    const result = ConsoleObj(testObj);
    const expectResult = 'a: 1, b: 10, c.d: 10, c.e.f: a, c.e.g: f';
    expect(result).toEqual(expectResult);
  });

  it('Test ConsoleObj nest 2 obj v2', () => {
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
    const result = ConsoleObj(testObj);
    const expectResult = 'a: 1, c.d: 10, c.e.f: a, c.e.g: f, b: 10';
    expect(result).toEqual(expectResult);
  });

  it('Test ConsoleObj nest 2 obj v3', () => {
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
    const result = ConsoleObj(testObj);
    const expectResult = 'a: 1, c.e.f: a, c.e.g: f, c.d: 10, b: 10';
    expect(result).toEqual(expectResult);
  });

  it('Test ConsoleObj nest 3 obj v1', () => {
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
    const result = ConsoleObj(testObj);
    const expectResult =
      'a: 1, c.e.f: a, c.e.g: f, c.d: 10, c.z.f: a, c.z.g.f: a, c.z.g.g: f, b: 10';
    expect(result).toEqual(expectResult);
  });
});

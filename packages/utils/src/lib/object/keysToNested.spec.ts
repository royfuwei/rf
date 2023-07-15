import { keysToNested } from '.';

describe('Test lib object nested', () => {
    it('Test keysToNested nest 1 obj v1', () => {
      const expectResult = {
        c: {
          d: 10,
        },
      };
      const result = keysToNested(['c', 'd'], 10);
      expect(result).toEqual(expectResult);
    });

    it('Test keysToNested nest 2 obj v1', () => {
      const expectResult = {
        c: {
          d: {
            b: 10
          },
        },
      };
      const result = keysToNested(['c', 'd', 'b'], 10);
      expect(result).toEqual(expectResult);
    });
});

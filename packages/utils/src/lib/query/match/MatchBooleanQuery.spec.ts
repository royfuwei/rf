import { MatchBooleanQuery } from './MatchBooleanQuery';

describe('arrayQuery', () => {
  const testData1 = {
    string: 'a',
    number: 1000,
    a1: {
      string: 'b',
      nullText: null,
      text: 'hola',
      textArray: ['hola', 'hello', 'bonjour'],
      contains: 'contains',
      stringArray: ['A', 'B', 'C1', 'D2', 'E3'],
      number: 100,
      numberArray: [100, 999, 50],
      boolean: true,
      false: false,
      booleanArray: [true, false, true, false, false]
    }
  }

  describe('MatchBooleanQuery', () => {

    describe('isnotnull', () => {
      it('undefined key: false', () => {
        const query = new MatchBooleanQuery(
          'a2.number',
          'isnotnull',
          null,
          testData1,
        );
        expect(query.isMatch).toEqual(false);
      })

      it('null key: false', () => {
        const query = new MatchBooleanQuery(
          'a1.nullText',
          'isnotnull',
          null,
          testData1,
        );
        expect(query.isMatch).toEqual(false);
      })

      it('number: true', () => {
        const query = new MatchBooleanQuery(
          'a1.number',
          'isnotnull',
          null,
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      })
    })

    describe('isnull', () => {
      it('boolean undefined: true', () => {
        const query = new MatchBooleanQuery(
          'a1.boolean2',
          'isnull',
          true,
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      });

      it('nullText: true', () => {
        const query = new MatchBooleanQuery(
          'a1.nullText',
          'isnull',
          null,
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      })
    })

    describe('neq', () => {
      it('boolean undefined: true', () => {
        const query = new MatchBooleanQuery(
          'a1.boolean2',
          'neq',
          true,
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      });

      it('boolean null: true', () => {
        const query = new MatchBooleanQuery(
          'a1.nullText',
          'neq',
          true,
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      });

      it('booleanArray bool: true', () => {
        const query = new MatchBooleanQuery(
          'a1.booleanArray',
          'neq',
          false,
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      });

      it('boolean bool: true', () => {
        const query = new MatchBooleanQuery(
          'a1.boolean',
          'neq',
          false,
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      });

      it('boolean bool: false', () => {
        const query = new MatchBooleanQuery(
          'a1.boolean',
          'neq',
          true,
          testData1,
        );
        expect(query.isMatch).toEqual(false);
      });
    })
    describe('eq', () => {
      it('boolean undefined: false', () => {
        const query = new MatchBooleanQuery(
          'a1.boolean2',
          'eq',
          true,
          testData1,
        );
        expect(query.isMatch).toEqual(false);
      });

      it('boolean null: false', () => {
        const query = new MatchBooleanQuery(
          'a1.nullText',
          'eq',
          true,
          testData1,
        );
        expect(query.isMatch).toEqual(false);
      });

      it('boolean bool: true', () => {
        const query = new MatchBooleanQuery(
          'a1.boolean',
          'eq',
          true,
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      });
  
      it('boolean stringbool: true', () => {
        const query = new MatchBooleanQuery(
          'a1.boolean',
          'eq',
          'true',
          testData1,
        );
        expect(query.isMatch).toEqual(true);
      });
  
      it('boolean boolean: false', () => {
        const query = new MatchBooleanQuery(
          'a1.boolean',
          'eq',
          false,
          testData1,
        );
        expect(query.isMatch).toEqual(false);
      });
    })

    describe('path', () => {
      it('error path', () => {
        const query = new MatchBooleanQuery(
          'a2.number',
          'eq',
          null,
          testData1,
        );
        expect(query.validPath).toEqual(false);
      });
  
      it('valid path', () => {
        const query = new MatchBooleanQuery(
          'a1.number',
          'eq',
          ['a'],
          testData1,
        );
        expect(query.validPath).toEqual(true);
      });
    })
  })
});

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

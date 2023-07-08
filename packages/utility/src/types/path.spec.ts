import { Paths, Leaves } from './path';



describe('utility', () => {
    it('use Leaves', async () => {
        interface ITest {
            a: string,
            b: string;
            c: ITest,
        };
        const result: Leaves<ITest>[] = ['a', 'b', 'c.c.a'];
        console.log(result);

        expect(result.length).toEqual(3);

    });

    it('use Paths', async () => {
        interface ITest {
            a: string,
            b: string;
            c: ITest,
        };
        const result: Paths<ITest>[] = ['a', 'b', 'c'];
        console.log(result);
        expect(result.length).toEqual(3);
    });
  });
  
import { Context } from 'koa';
import { KoaMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: 'before' })
export class ResponseTimeMiddleware implements KoaMiddlewareInterface {
  async use(context: Context, next: (err?: any) => Promise<any>): Promise<any> {
    const start = Date.now();
    await next();
    const end = Date.now();
    const ms = end - start;
    context.set('X-Response-Time', `${ms}ms`);
  }
}

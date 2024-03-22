import { isAsyncFunction } from 'util/types';
import { delay } from '../delay';

type RetryCallback<T> = () => Promise<T> | T;

export class RetryHelper {
  createRetry() {
    return async <T>(
      job: RetryCallback<T>,
      periodMs = 100,
      maxRetryTimes = 5,
    ) => {
      const isAsync = isAsyncFunction(job);
      const asyncRetry = async (count = 0): Promise<T> => {
        try {
          if (isAsync) {
            return await job();
          }
          return job();
        } catch (error) {
          if (maxRetryTimes > count) {
            count++;
            console.log(
              `retry maxRetryTimes: ${maxRetryTimes}, period: ${periodMs} ms, retry: ${count}`,
            );
            await delay(periodMs);
            return asyncRetry(count);
          } else {
            throw error;
          }
        }
      };
      return asyncRetry();
    };
  }
}
export const retryHelper = new RetryHelper();
export const retry = retryHelper.createRetry();

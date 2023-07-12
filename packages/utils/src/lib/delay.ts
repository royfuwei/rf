// import EventEmitter = require("events");

// export const delay = async (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));

interface DelayOptions {
  value?: unknown;
  signal?: AbortSignal;
}

export class Delay {
  static clearMethod = new Map();
  // static clearMethod = new WeakMap();

  static createAbortError = () => {
    const error = new Error('Delay aborted');
    error.name = 'AbortError';
    return error;
  };

  static createDelay() {
    return (ms: number, { value, signal }: DelayOptions = {}) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      let timeoutId: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let rejectFunction: (reason?: any) => void;
      let resolveFunction: (value: unknown) => void;

      const signalListener = () => {
        clearTimeout(timeoutId);
        rejectFunction(this.createAbortError());
      };

      const cleanup = () => {
        if (signal) {
          signal.removeEventListener('abort', signalListener);
        }
      };

      const delayPromise = new Promise((resolve, reject) => {
        resolveFunction = (val: unknown) => {
          cleanup();
          resolve(val);
        };
        rejectFunction = reject;
        timeoutId = setTimeout(resolveFunction, ms);
      });

      if (signal) {
        signal.addEventListener('abort', signalListener, { once: true });
      }

      this.clearMethod.set(delayPromise, () => {
        clearTimeout(timeoutId);
        timeoutId = null;
        resolveFunction(value);
      });
      return delayPromise;
    };
  }

  static clearDelay(promise: Promise<unknown>) {
    this.clearMethod.get(promise)?.();
  }
}

export const delay = Delay.createDelay();

interface DelayOptions {
    value?: unknown;
    signal?: AbortSignal;
}

export class DelayHelper {
    clearMethod = new Map();
    // static clearMethod = new WeakMap();

    createAbortError = () => {
        const error = new Error('Delay aborted');
        error.name = 'AbortError';
        return error;
    };

    createDelay() {
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

    clearDelay(promise: Promise<unknown>) {
        this.clearMethod.get(promise)?.();
    }
}

export const delayHelper = new DelayHelper();
export const delay = delayHelper.createDelay();

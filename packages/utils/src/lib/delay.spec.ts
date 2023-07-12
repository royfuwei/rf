import { Delay, delay } from './delay';

it('Test Delay clear', async () => {
  const delayedPromise = Delay.createDelay()(8000);
  setTimeout(() => {
    console.log(`setTimeout 500`);
    Delay.clearDelay(delayedPromise);
  }, 500);
  await delayedPromise;
});

it('Test Delay clear', async () => {
  const delayedPromise = delay(8000);
  setTimeout(() => {
    console.log(`setTimeout 500`);
    Delay.clearDelay(delayedPromise);
  }, 500);
  await delayedPromise;
});

it('Test Delay create', async () => {
  await delay(4000);
});

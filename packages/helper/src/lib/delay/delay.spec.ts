import { delayHelper, delay } from '.';

it('Test Delay clear', async () => {
  const delayedPromise = delayHelper.createDelay()(8000);
  setTimeout(() => {
    console.log(`setTimeout 500`);
    delayHelper.clearDelay(delayedPromise);
  }, 500);
  await delayedPromise;
});

it('Test Delay clear', async () => {
  const delayedPromise = delay(8000);
  setTimeout(() => {
    console.log(`setTimeout 500`);
    delayHelper.clearDelay(delayedPromise);
  }, 500);
  await delayedPromise;
});

it('Test Delay create', async () => {
  await delay(4000);
});

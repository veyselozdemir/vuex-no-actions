import { sleepAsync } from '..';

describe('sleep tests', () => {
  it('returns after the given amount of time', async () => {
    const startTime = Date.now();
    const waitTime = 75;
    await sleepAsync(waitTime);
    const endTime = Date.now();
    const timeDiff = endTime - startTime;
    expect(timeDiff).toBeGreaterThan(waitTime);
  });
});

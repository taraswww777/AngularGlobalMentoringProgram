import { UpperFirstCasePipe } from './first-case.pipe';

describe('FirstCasePipe', () => {
  it('create an instance', () => {
    const pipe = new UpperFirstCasePipe();
    expect(pipe).toBeTruthy();
  });
});

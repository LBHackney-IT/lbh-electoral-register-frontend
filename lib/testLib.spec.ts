import { add } from './testLib';

describe('test file', () => {
  it('should add numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
});

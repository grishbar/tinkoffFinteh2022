const getPossibleWays = require('./index');

describe('Second Task tests', () => {
  it('should works for basic tests.', () => {
    expect(getPossibleWays([4, 4])).toEqual(2);
    expect(getPossibleWays([3, 4])).toEqual(0);
    expect(getPossibleWays([2, 3])).toEqual(1);
    expect(getPossibleWays([3, 2])).toEqual(1);
    expect(getPossibleWays([7, 7])).toEqual(6);
    expect(getPossibleWays([8, 9])).toEqual(10);
    expect(getPossibleWays([9, 8])).toEqual(10);
    expect(getPossibleWays([9, 5])).toEqual(1);
    expect(getPossibleWays([5, 9])).toEqual(1);
    expect(getPossibleWays([10, 4])).toEqual(0);
  });
});

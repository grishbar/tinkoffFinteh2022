const getMinimumJumpsAmount = require('./index');

describe('Second Task tests', () => {
  it('should works for basic tests.', () => {
    expect(getMinimumJumpsAmount(3, [0, 2, 2], [1, 1, 0])).toEqual(2);
    expect(getMinimumJumpsAmount(2, [1, 1], [1, 0])).toEqual(-1);
    expect(getMinimumJumpsAmount(
      10, [0, 1, 2, 3, 5, 5, 6, 7, 8, 5], [9, 8, 7, 1, 5, 4, 3, 2, 0, 0],
    )).toEqual(3);
  });
});

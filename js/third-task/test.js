const getMinStartNumber = require('./index');

describe('Second Task tests', () => {
  it('should works for basic tests.', () => {
    expect(getMinStartNumber([2, 1, 100])).toEqual(3);
    expect(getMinStartNumber([1, 1, 1, 1, 1])).toEqual(2);
    expect(getMinStartNumber([3, 4])).toEqual(3);
  });
});

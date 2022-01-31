const getPaintBucketsAmount = require('./index');

describe('Second Task tests', () => {
  it('should works for basic tests.', () => {
    expect(getPaintBucketsAmount([3, 9])).toEqual(3);
    expect(getPaintBucketsAmount([5, 10])).toEqual(2);
    expect(getPaintBucketsAmount([2, 12])).toEqual(6);
    expect(getPaintBucketsAmount([3, 4])).toEqual(4);
    expect(getPaintBucketsAmount([3, 5])).toEqual(4);
    expect(getPaintBucketsAmount([4, 5])).toEqual(5);
    expect(getPaintBucketsAmount([4, 6])).toEqual(3);
    expect(getPaintBucketsAmount([12, 2])).toEqual(6);
  });
});

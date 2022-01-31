// import getIsHypothesisRight from './index';
const getIsHypothesisRight = require('./index');
// const assert = require('assert');

// const { getIsHypothesisRight } = index;
const YES = 'YES';
const NO = 'NO';

describe('First Task tests', () => {
  it('should works for basic tests.', () => {
    expect(getIsHypothesisRight([3, 5, 1])).toEqual(NO);
    expect(getIsHypothesisRight([5, 3, 1])).toEqual(YES);
    expect(getIsHypothesisRight([7, 3, 1])).toEqual(YES);
    expect(getIsHypothesisRight([1, 3, 1])).toEqual(NO);
    expect(getIsHypothesisRight([2, 1, 1])).toEqual(NO);
    expect(getIsHypothesisRight([10, 5, 1])).toEqual(NO);
    expect(getIsHypothesisRight([1, 3, 1])).toEqual(NO);
    expect(getIsHypothesisRight([10, 2, 4])).toEqual(YES);
    expect(getIsHypothesisRight([10, 2, 5])).toEqual(NO);
    expect(getIsHypothesisRight([10, 2, 3])).toEqual(YES);
    expect(getIsHypothesisRight([10, 2, 2])).toEqual(YES);
    expect(getIsHypothesisRight([10, 2, 1])).toEqual(YES);
    expect(getIsHypothesisRight([10, 2, 0])).toEqual(NO);
    expect(getIsHypothesisRight([5, 5, 0])).toEqual(NO);
    expect(getIsHypothesisRight([0, 0, 0])).toEqual(NO);
  });
});

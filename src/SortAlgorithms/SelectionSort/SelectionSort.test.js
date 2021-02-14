import { expect } from 'chai';
import SelectionSort, { findLowest } from './SelectionSort';

describe('Selection Sort', function () {
  it('for List 24,16,51,67,32,32,64,66 should return [16, 24, 32, 32, 51, 64, 66, 67]', function () {
    expect(SelectionSort([24, 16, 51, 67, 32, 32, 64, 66])).to.deep.equal([
      16,
      24,
      32,
      32,
      51,
      64,
      66,
      67,
    ]);
  });

  describe('findLowest', function () {
    it('for List 24,16,51,67,32,32,64,66', function () {
      expect(findLowest([24, 16, 51, 67, 32, 32, 64, 66])).to.be.equal(1);
    });
  });
});

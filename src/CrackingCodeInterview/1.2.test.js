import { expect } from 'chai';
import checkPermutationOptimized, { checkPermutation } from './1.2';

describe('Test checkPermutation', function () {
  it("When testing 'abc' and 'bca', then should return true", function () {
    expect(checkPermutationOptimized('abc', 'bca')).to.be.equal(true);
    expect(checkPermutation('abc', 'bca')).to.be.equal(true);
  });

  it("When testing 'A4DÑb' and 'D4ÑbA', then should return true", function () {
    expect(checkPermutationOptimized('A4DÑb', 'D4ÑbA')).to.be.equal(true);
    expect(checkPermutation('A4DÑb', 'D4ÑbA')).to.be.equal(true);
  });

  it("When testing '3#3' and 'D4ÑbA', then should return true", function () {
    expect(checkPermutationOptimized('3#3', 'D4ÑbA')).to.be.equal(false);
    expect(checkPermutation('3#3', 'D4ÑbA')).to.be.equal(false);
  });

  it("When testing 'skaas' and 'skas', then should return false", function () {
    expect(checkPermutationOptimized('skaas', 'skas')).to.be.equal(false);
    expect(checkPermutation('skaas', 'skas')).to.be.equal(false);
  });
});

import { expect } from 'chai';
import palindromePermutationOptimized, { palindromePermutation } from './1.4';

describe('Test palindromePermutation force and optimized solution', function () {
  it("When test 'aab' it should return true", function () {
    expect(palindromePermutation('aab')).to.be.equal(true);
    expect(palindromePermutationOptimized('aab')).to.be.equal(true);
  });

  it("When test 'qqwwwq' it should return false", function () {
    expect(palindromePermutation('qqwwwq')).to.be.equal(false);
    expect(palindromePermutationOptimized('qqwwwq')).to.be.equal(false);
  });

  it("When test 'pojtjtpojt' it should return false", function () {
    expect(palindromePermutation('pojtjtpojt')).to.be.equal(false);
    expect(palindromePermutationOptimized('pojtjtpojt')).to.be.equal(false);
  });
});

import { expect } from 'chai';
import stringCompressionOptimized, {
  stringCompression,
  stringCompressionOptimizedFirstApproach,
  checkStringCompressedLength,
} from './1.6';

describe('Test string compression', function () {
  it("When test compression of 'aabcccccaaa', it should return 'a2b1c5a3'", function () {
    expect(stringCompression('aabcccccaaa')).to.be.equal('a2b1c5a3');
    expect(stringCompressionOptimized('aabcccccaaa')).to.be.equal('a2b1c5a3');
    expect(stringCompressionOptimizedFirstApproach('aabcccccaaa')).to.be.equal(
      'a2b1c5a3'
    );
  });

  it("When test compression of 'abd', it should return 'abd'", function () {
    expect(stringCompression('abd')).to.be.equal('abd');
    expect(stringCompressionOptimized('abd')).to.be.equal('abd');
    expect(stringCompressionOptimizedFirstApproach('abd')).to.be.equal('abd');
  });

  it("When test compression of '', it should return ''", function () {
    expect(stringCompression('')).to.be.equal('');
    expect(stringCompressionOptimized('')).to.be.equal('');
    expect(stringCompressionOptimizedFirstApproach('')).to.be.equal('');
    expect(stringCompression(null)).to.be.equal('');
    expect(stringCompressionOptimized(null)).to.be.equal('');
    expect(stringCompressionOptimizedFirstApproach(null)).to.be.equal('');
    expect(stringCompression(undefined)).to.be.equal('');
    expect(stringCompressionOptimized(undefined)).to.be.equal('');
    expect(stringCompressionOptimizedFirstApproach(undefined)).to.be.equal('');
  });
});

describe('Test string length compression', function () {
  it("When test compression of 'aabcccccaaa', it should return 'a2b1c5a3'", function () {
    expect(checkStringCompressedLength('aabcccccaaa')).to.be.equal(8);
  });

  it("When test compression of 'abd', it should return 3", function () {
    expect(checkStringCompressedLength('abd')).to.be.equal(3);
  });

  it("When test compression of '', it should return ''", function () {
    expect(checkStringCompressedLength('')).to.be.equal(0);
  });
});

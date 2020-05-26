import { expect } from 'chai';
import BynarySearch from './BynarySearch';

describe('Test BynarySearch Algorithm', function () {
  it('For input ([1,3,4,6,7,8,10,12], 10), then the result should be 6', function () {
    expect(BynarySearch([1, 3, 4, 6, 7, 8, 10, 12], 10)).to.be.equal(6);
  });

  it('For input ([1,3,4,6,7,8,10,12], 9), then the result should be null', function () {
    expect(BynarySearch([1, 3, 4, 6, 7, 8, 10, 12], 9)).to.be.equal(null);
  });

  it('For input ([1,3,4,6,7,8,10,12], 1), then the result should be 0', function () {
    expect(BynarySearch([1, 3, 4, 6, 7, 8, 10, 12], 1)).to.be.equal(0);
  });

  it('For input ([1,3,4,6,7,8,10,12], -1), then the result should be null', function () {
    expect(BynarySearch([1, 3, 4, 6, 7, 8, 10, 12], -1)).to.be.equal(null);
  });
});

import { expect } from 'chai';
import isUniqueOptimized, { isUnique } from '@/CrackingCodeInterview/1.1';

describe('When test isUnique function', function () {
  let strUnique;
  let strNoUnique;
  before(function () {
    strUnique = 'ksajoipwer';
    strNoUnique = 'msaopiow';
  });

  it("Then testing 'ksajoipwer' should be unique", function () {
    expect(isUniqueOptimized(strUnique)).to.be.equal(true);
    expect(isUnique(strUnique)).to.be.equal(true);
  });

  it("Then testing 'msaopiow' should be not unique", function () {
    expect(isUniqueOptimized(strNoUnique)).to.be.equal(false);
    expect(isUnique(strNoUnique)).to.be.equal(false);
  });

  it('Then testing empty, null and undefined should be not unique', function () {
    expect(isUniqueOptimized('')).to.be.equal(false);
    expect(isUnique(null)).to.be.equal(false);
    expect(isUnique(undefined)).to.be.equal(false);
    expect(isUnique()).to.be.equal(false);
  });
});

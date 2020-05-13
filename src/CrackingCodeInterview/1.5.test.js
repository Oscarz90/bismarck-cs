import { expect } from 'chai';
import oneAwayOptimized, { oneAway } from './1.5';

describe('Testing one away', function () {
  it("When 'pale', 'ple', it should return true", function () {
    expect(oneAway('pale', 'ple')).to.be.equal(true);
    expect(oneAwayOptimized('pale', 'ple')).to.be.equal(true);
  });

  it("When 'pale', 'ale', it should return true", function () {
    expect(oneAway('pale', 'ale')).to.be.equal(true);
    expect(oneAwayOptimized('pale', 'ale')).to.be.equal(true);
  });

  it("When 'pale', 'pal', it should return true", function () {
    expect(oneAway('pale', 'pal')).to.be.equal(true);
    expect(oneAwayOptimized('pale', 'pal')).to.be.equal(true);
  });

  it("When 'pale', 'pel', it should return false", function () {
    expect(oneAway('pale', 'pel')).to.be.equal(false);
    expect(oneAwayOptimized('pale', 'pel')).to.be.equal(false);
  });

  it("When 'pales', 'pale', it should return true", function () {
    expect(oneAway('pales', 'pale')).to.be.equal(true);
    expect(oneAwayOptimized('pales', 'pale')).to.be.equal(true);
  });

  it("When 'spale', 'pale', it should return true", function () {
    expect(oneAway('spale', 'pale')).to.be.equal(true);
    expect(oneAwayOptimized('spale', 'pale')).to.be.equal(true);
  });

  it("When 'psale', 'pale', it should return true", function () {
    expect(oneAway('psale', 'pale')).to.be.equal(true);
    expect(oneAwayOptimized('psale', 'pale')).to.be.equal(true);
  });

  it("When 'psale', 'pala', it should return false", function () {
    expect(oneAway('psale', 'pala')).to.be.equal(false);
    expect(oneAwayOptimized('psale', 'pala')).to.be.equal(false);
  });

  it("When 'pale', 'bale', it should return true", function () {
    expect(oneAway('pale', 'bale')).to.be.equal(true);
    expect(oneAwayOptimized('pale', 'bale')).to.be.equal(true);
  });

  it("When 'pale', 'pble', it should return true", function () {
    expect(oneAway('pale', 'pble')).to.be.equal(true);
    expect(oneAwayOptimized('pale', 'pble')).to.be.equal(true);
  });

  it("When 'pale', 'palb', it should return true", function () {
    expect(oneAway('pale', 'palb')).to.be.equal(true);
    expect(oneAwayOptimized('pale', 'palb')).to.be.equal(true);
  });

  it("When 'pale', 'pelb', it should return false", function () {
    expect(oneAway('pale', 'pelb')).to.be.equal(false);
    expect(oneAwayOptimized('pale', 'pelb')).to.be.equal(false);
  });
});

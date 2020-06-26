import { expect } from 'chai';
import URLifyOptimized, { URLify } from './1.3';

describe('Testing URLify solution', function () {
  it("When test 'Mr Oscar Mtz    ', it should return 'Mr%20Oscar%20Mtz'", function () {
    expect(URLifyOptimized('Mr Oscar Mtz    ', 12)).to.be.equal(
      'Mr%20Oscar%20Mtz'
    );
    expect(URLify('Mr Oscar Mtz    ', 12)).to.be.equal('Mr%20Oscar%20Mtz');
  });

  it("When test 'Mr Robert Trujillo Torres       ', it should return 'Mr%20Robert%20Trujillo%20Torres'", function () {
    expect(URLifyOptimized('Mr Robert Trujillo Torres       ', 25)).to.be.equal(
      'Mr%20Robert%20Trujillo%20Torres '
    );
    expect(URLify('Mr Robert Trujillo Torres       ', 25)).to.be.equal(
      'Mr%20Robert%20Trujillo%20Torres'
    );
  });

  it("When test 'Mr Alejo Cam Jim     ', it should return 'Mr Alejo Cam Jim     '", function () {
    expect(URLifyOptimized('Mr Alejo Cam Jim     ', 16)).to.be.equal(
      'Mr Alejo Cam Jim     '
    );
    expect(URLify('Mr Alejo Cam Jim     ', 16)).to.be.equal(
      'Mr Alejo Cam Jim     '
    );
  });
});

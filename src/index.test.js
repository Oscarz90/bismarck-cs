import assert from 'assert';

const description = 'Computer Science Repository';

describe('bismark-cs', function () {
  describe("Repository's Description", function () {
    it(description, function () {
      assert.equal(description, 'Computer Science Repository');
    });
  });
});

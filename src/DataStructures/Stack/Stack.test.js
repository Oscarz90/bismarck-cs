import { expect } from 'chai';
import Stack from './Stack';

describe('Stack', function () {
  let myStackInstance;

  before(function () {
    myStackInstance = new Stack();
  });

  it('It should be instace of Stack Class', function () {
    expect(myStackInstance).to.be.an.instanceOf(Stack);
  });

  it('top should be null', function () {
    expect(myStackInstance.top).to.be.equal(null);
  });

  it('isEmpty should return true', function () {
    expect(myStackInstance.isEmpty()).to.be.equal(true);
  });

  it('size should be 0', function () {
    expect(myStackInstance.length).to.be.equal(0);
  });

  describe('Search', function () {
    it('On the given stack foo, bar, leet, when search bar it should return its value', function () {
      const testStack = new Stack();
      testStack.push('foo');
      testStack.push('bar');
      testStack.push('leet');
      const result = testStack.search('bar');
      expect(result?.data).to.be.equal('bar');
    });
  });

  describe('Push and Pop', function () {
    describe('When pushing foo', function () {
      let testStack;
      before(function () {
        testStack = new Stack();
        testStack.push('foo');
      });

      it('top should be foo', function () {
        expect(testStack.top.data).to.be.equal('foo');
      });
      it('size should be 1 ', function () {
        expect(testStack.length).to.be.equal(1);
      });
      it('isEmpty should return false', function () {
        expect(testStack.isEmpty()).to.be.equal(false);
      });
    });

    describe('When pop after pushing bar', function () {
      let testStack;
      let nodeRemoved;
      before(function () {
        testStack = new Stack();
        testStack.push('bar');
        nodeRemoved = testStack.pop();
      });

      it("Node's data should be bar", function () {
        expect(nodeRemoved.data).to.be.equal('bar');
      });
      it('top should be null', function () {
        expect(testStack.top).to.be.equal(null);
      });
      it('size should be 0', function () {
        expect(testStack.length).to.be.equal(0);
      });
      it('isEmpty should return true', function () {
        expect(testStack.isEmpty()).to.be.equal(true);
      });
    });

    describe('When pushing foo and bar', function () {
      let testStack;
      before(function () {
        testStack = new Stack();
        testStack.push('foo');
        testStack.push('bar');
      });

      it('top should be bar', function () {
        expect(testStack.top.data).to.be.equal('bar');
      });
      it('size should be 2', function () {
        expect(testStack.length).to.be.equal(2);
      });
      it('isEmpty should return false', function () {
        expect(testStack.isEmpty()).to.be.equal(false);
      });
      it("when pop, node's data should be bar", function () {
        expect(testStack.pop().data).to.be.equal('bar');
      });
      it('top should be foo', function () {
        expect(testStack.top.data).to.be.equal('foo');
      });
      it('size should be 1', function () {
        expect(testStack.length).to.be.equal(1);
      });
      it('isEmpty should return again false', function () {
        expect(testStack.isEmpty()).to.be.equal(false);
      });
      it("when pop, node's data should be foo", function () {
        expect(testStack.pop().data).to.be.equal('foo');
      });
      it('top should be null', function () {
        expect(testStack.top).to.be.equal(null);
      });
      it('size should be 0', function () {
        expect(testStack.length).to.be.equal(0);
      });
      it('isEmpty should return again true', function () {
        expect(testStack.isEmpty()).to.be.equal(true);
      });
    });
  });

  describe('Corner Cases', function () {
    describe('On new Stack instance', function () {
      it('pop should return null', function () {
        const myStack = new Stack();
        expect(myStack.pop()).to.be.equal(null);
      });
    });
  });
});

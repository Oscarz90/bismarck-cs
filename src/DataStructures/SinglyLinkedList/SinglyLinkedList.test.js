import { expect } from 'chai';
import SinglyLinkedList from './SinglyLinkedList';
import Node from './Node';

describe('Simply Linked List', function () {
  const testList = new SinglyLinkedList();
  it('It should be instace of SinglyLinkedList Class', function () {
    expect(testList).to.be.an.instanceOf(SinglyLinkedList);
  });

  describe('Adding Nodes', function () {
    it('When adding Node(2), Then its size should be 1', function () {
      testList.add(2);
      expect(testList.size).to.be.equal(1);
    });

    it('When adding Node(3), Node(4), Node(5), Then it should print 2 -> 3 -> 4 -> 5', function () {
      testList.add(3);
      testList.add(4);
      testList.add(5);
      expect(testList.print()).to.be.equal('2->3->4->5');
    });

    it('When checking if list is empty Then it should return false', function () {
      expect(testList.isEmpty()).to.be.equal(false);
    });

    it('When searching for a nonexistent value, Then it should return null', function () {
      expect(testList.get(100)).to.be.equal(null);
    });

    describe('When removing Node(5)', function () {
      let deleteNode;
      before(function () {
        deleteNode = testList.get(5);
      });

      it("Then tail's Node should be Node(4)", function () {
        const previousNode = testList.getPreviousNode(deleteNode);
        testList.delete(deleteNode, previousNode);
        const tailNode = testList.get(4);
        expect(testList.tail).to.be.equal(tailNode);
      });

      it("Then it should print '2->3->4'", function () {
        expect(testList.print()).to.be.equal('2->3->4');
      });

      it('Then its size should be 3', function () {
        expect(testList.size).to.be.equal(3);
      });

      it('Then Node(5) next pointer should be null', function () {
        expect(deleteNode.next).to.be.equal(null);
        expect(deleteNode.data).to.be.equal(5);
      });
    });

    describe('When removing Node(2)', function () {
      let deleteNode;
      before(function () {
        deleteNode = testList.get(2);
      });

      it("Then head's Node should be Node(3)", function () {
        const previousNode = testList.getPreviousNode(deleteNode);
        testList.delete(deleteNode, previousNode);
        const tailNode = testList.get(3);
        expect(testList.head).to.be.equal(tailNode);
      });

      it("Then it should print '3->4'", function () {
        expect(testList.print()).to.be.equal('3->4');
      });

      it('Then its size should be 2', function () {
        expect(testList.size).to.be.equal(2);
      });

      it('Then Node(2) next pointer should be null', function () {
        expect(deleteNode.next).to.be.equal(null);
        expect(deleteNode.data).to.be.equal(2);
      });
    });

    describe('When removing Node(4)', function () {
      let deleteNode;
      before(function () {
        deleteNode = testList.get(4);
      });

      it("Then head and tail's Node should be Node(3)", function () {
        const previousNode = testList.getPreviousNode(deleteNode);
        testList.delete(deleteNode, previousNode);
        const uniqueNode = testList.get(3);
        expect(testList.head).to.be.equal(uniqueNode);
        expect(testList.tail).to.be.equal(uniqueNode);
      });

      it("Then it should print '3'", function () {
        expect(testList.print()).to.be.equal('3');
      });

      it('Then its size should be 1', function () {
        expect(testList.size).to.be.equal(1);
      });

      it('Then Node(4) next pointer should be null', function () {
        expect(deleteNode.next).to.be.equal(null);
        expect(deleteNode.data).to.be.equal(4);
      });
    });

    describe('When removing last Node(3)', function () {
      let deleteNode;
      before(function () {
        deleteNode = testList.get(3);
      });

      it("Then head and tail's Node should be null", function () {
        const previousNode = testList.getPreviousNode(deleteNode);
        testList.delete(deleteNode, previousNode);
        expect(testList.head).to.be.equal(null);
        expect(testList.tail).to.be.equal(null);
      });

      it("Then it should print ''", function () {
        expect(testList.print()).to.be.equal('');
      });

      it('Then its size should be 0', function () {
        expect(testList.size).to.be.equal(0);
      });

      it('Then Node(3) next pointer should be null', function () {
        expect(deleteNode.next).to.be.equal(null);
        expect(deleteNode.data).to.be.equal(3);
      });
    });

    it('Testing corner case when trying to delete a node of an empty list', function () {
      const list = new SinglyLinkedList();
      list.delete(new Node(1), new Node(2));
    });

    it('Testing corner case when trying to get a node of an empty list', function () {
      const list = new SinglyLinkedList();
      list.get(1);
    });
  });
});

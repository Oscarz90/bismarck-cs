import SinglyLinkedList from '@/DataStructures/SinglyLinkedList/SinglyLinkedList';
import { expect } from 'chai';
import { printNodeChain, reverseList } from './NodeUtils';

describe('Node Utils', function () {
  let testList;

  beforeEach(function () {
    testList = new SinglyLinkedList();
    testList.add(5);
    testList.add(3);
    testList.add(1);
    testList.add(8);
    testList.add(6);
  });

  describe('printNodeChain', function () {
    it('For list 5,3,1,8,6 should return 5->3->1->8->6', function () {
      expect(printNodeChain(testList.head)).to.be.equal('5->3->1->8->6');
    });
  });

  describe('reverseList', function () {
    it('For list 5,3,1,8,6 should return 6->8->1->3->5', function () {
      const newHead = reverseList(testList.head);

      expect(printNodeChain(newHead)).to.be.equal('6->8->1->3->5');
    });
  });
});

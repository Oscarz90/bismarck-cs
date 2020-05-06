import { expect } from 'chai';
import Node from './Node';

describe('When creating a new Node(2) instance', function () {
  const node = new Node(2);
  it('It Should be an instance of  Node ', function () {
    expect(node).to.be.an.instanceOf(Node);
  });

  it('The data within the node instance should be 2', function () {
    expect(node.data).to.be.equal(2);
  });

  it('The next pointer within the node instance should be null', function () {
    expect(node.next).to.be.equal(null);
  });

  describe('Then adding in next pointer a new Node(4)', function () {
    it('Next node pointer should be equal to Node(4) instance', function () {
      const newNode = new Node(4);
      node.next = newNode;
      expect(node.next).to.be.equal(newNode);
    });
  });
});

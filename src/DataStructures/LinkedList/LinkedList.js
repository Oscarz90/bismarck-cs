import { isNil } from 'lodash';
import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Add a new node on the list - LIFO strategy
   * Time complexity: O(1)
   * @param {*} data The data to save within the list
   */
  add(data) {
    const newNode = new Node(data);

    if (isNil(this.head)) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.increaseSize();
  }

  /**
   * Delete a given node on the list - LIFO strategy
   * Time complexity: O(1)
   * @param {Node} node The node to delete
   * @param {Node} previousNode The previous node of the given node to delete, it can be null
   */
  delete(node, previousNode) {
    if (this.isEmpty() || isNil(node)) return;

    if (node === this.head && node === this.tail) {
      this.head = null;
      this.tail = null;
    }

    if (node === this.head && node !== this.tail) {
      this.head = node.next;
    }

    if (node === this.tail && node !== this.head) {
      // eslint-disable-next-line no-param-reassign
      previousNode.next = node.next;
      this.tail = previousNode;
    }

    // eslint-disable-next-line no-param-reassign
    node.next = null;
    this.decreaseSize();
  }

  /**
   * Search the node with the given data
   * Time complexity: O(n)
   * @param {*} data The given data to look up in the list
   */
  get(data) {
    if (isNil(this.head) || isNil(data)) return null;

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Search the previous node of a given node
   * Time complexity: O(n)
   * @param {Node} node The node from which we will obtain its previous node
   */
  getPreviousNode(node) {
    if (node === this.head || this.isEmpty()) return null;

    let previousNode = null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode === node) break;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return previousNode;
  }

  /**
   * Print the data of every node and return it as string concated with ->
   * Complexity Time: O(n)
   * @returns {String} The data of every node concated with -> symbol
   */
  print() {
    let currentNode = this.head;
    const nodesData = [];
    while (currentNode) {
      nodesData.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodesData.join(' -> ');
  }

  isEmpty() {
    return this.size === 0;
  }

  increaseSize() {
    this.size += 1;
  }

  decreaseSize() {
    this.size -= 1;
  }
}

/* eslint-disable no-underscore-dangle */
import Node from './Node';

export default class Stack {
  constructor() {
    this._top = null;
    this._length = 0;
  }

  /**
   * Add a new node on the list - LIFO strategy
   * - Time complexity: O(1)
   * @param {*} data - The data to save within the list
   */
  push(data) {
    const newNode = new Node(data);
    if (!this._top) {
      this._top = newNode;
    } else {
      newNode.previous = this._top;
      this._top = newNode;
    }

    this._length += 1;
  }

  /**
   * Removes the node from the top of the stack
   * - Time complexity: O(1)
   * @returns {Node} The node on the top of the stack
   */
  pop() {
    if (!this._top) return null;
    const nodeRemoved = this._top;
    this._top = nodeRemoved.previous;
    this._length -= 1;
    return nodeRemoved;
  }

  /**
   * Search through the stack for a given value and returns the node with the value
   * - Time complexity: O(n)
   * @param {*} data - The data to look for within the stack
   * @returns {Node} The node that contains the searched data
   */
  search(data) {
    let currentNode = this._top;
    while (currentNode) {
      if (currentNode.data === data) return currentNode;
      currentNode = currentNode.previous;
    }

    return null;
  }

  /**
   * Return the node on the stack's top
   * @returns {Node} The node on the stack's top
   */
  get top() {
    return this._top;
  }

  /**
   * Return the current stack's length
   * @returns {number} The length of the stack
   */
  get length() {
    return this._length;
  }

  /**
   * Tell if the stack is empty
   * @returns {boolean} A true when the stack is empty and the opposite when it has at least one node
   */
  isEmpty() {
    return !this._top;
  }
}

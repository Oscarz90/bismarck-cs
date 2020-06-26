import Node from '@/DataStructures/LinkedList/Node';

/**
 * Gather all node´s data and join them in a string separating the values with a symbol (separator)
 * - Time complexity: O(n)
 * @param {Node} head - The initial node to start iteration to print
 * @param {string} [separator='->'] - The symbol to join all values of the given node's list
 * @returns {string} The nodes' data concatenated with the given separator (see default separator)
 */
export function printNodeChain(head, separator = '->') {
  const content = [];
  let currentNode = head;
  while (currentNode) {
    content.push(currentNode.data);
    currentNode = currentNode.next;
  }
  return content.join(separator);
}

/**
 * Reverse a list
 * @param {Node} headNode - The list's head to start reversing the list
 * @returns {Node} The new head of the reversed list
 */
export function reverseList(headNode) {
  let currentNode = headNode;
  let newHead = null;

  while (currentNode) {
    const newNode = new Node(currentNode.data);
    newNode.next = newHead;
    newHead = newNode;
    currentNode = currentNode.next;
  }
  return newHead;
}

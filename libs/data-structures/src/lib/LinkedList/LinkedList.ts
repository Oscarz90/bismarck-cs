import { Node } from './Node';

export class LinkedList<T> {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop(): Node | null {
    if (this.isEmpty()) return null;

    if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return nodeToRemove;
    }

    let currentNode = this.head;
    const nodeToRemove = this.tail;
    let secondLastNode = null;

    while (currentNode) {
      if (currentNode.next === this.tail) {
        secondLastNode = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }

    secondLastNode.next = null;
    this.tail = secondLastNode;
    this.length--;

    return nodeToRemove;
  }

  get(index: number): Node | null {
    if (index < 0 || index >= this.length || this.isEmpty()) return null;

    if (index === 0) return this.head;

    if (index === this.length - 1) return this.tail;

    let currentNode = this.head;
    let iterator = 0;

    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  delete(index: number): Node | null {
    if (index < 0 || index >= this.length || this.isEmpty()) return null;

    let nodeToRemove;

    if (index === 0) {
      nodeToRemove = this.head;
      this.head = nodeToRemove.next;
      this.length--;
      return nodeToRemove;
    }

    let iterator = 1;
    nodeToRemove = this.head.next;
    let secondLastNode = this.head;

    while (iterator < index) {
      if (iterator === index) {
        break;
      }

      nodeToRemove = nodeToRemove.next;
      secondLastNode = secondLastNode.next;
      iterator++;
    }

    if (nodeToRemove === this.tail) {
      this.tail = secondLastNode;
    }

    secondLastNode.next = nodeToRemove.next;

    this.length--;

    return nodeToRemove;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

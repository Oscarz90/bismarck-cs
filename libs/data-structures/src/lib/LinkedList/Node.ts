export class Node<T> {
  data: T;
  next: Node<T> | null;
  previous: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

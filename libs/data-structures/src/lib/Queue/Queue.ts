export class Queue<T> {
  queue: Array<T>;

  constructor() {
    this.queue = [];
  }

  enqueue(data: T) {
    this.queue.push(data);
  }

  dequeue() {
    this.queue.shift();
  }

  peek(): T {
    return this.queue[0];
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  get length(): number {
    return this.queue.length;
  }
}

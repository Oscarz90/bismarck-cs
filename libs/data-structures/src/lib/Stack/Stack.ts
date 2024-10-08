export class Stack<T> {
  stack: Array<T>;

  constructor() {
    this.stack = [];
  }

  pop() {
    return this.stack.pop();
  }

  push(item: T) {
    this.stack.push(item);
  }

  peek(): T {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  get length(): number {
    return this.stack.length;
  }
}

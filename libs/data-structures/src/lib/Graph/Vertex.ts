export class Vertex {
  value: number;
  edges: Vertex[];

  constructor(value: number) {
    this.value = value;
    this.edges = [];
  }
}

export class Node<T> {
  value: T;
  edges: Array<Node<T>>;

  constructor(value: T) {
    this.value = value;
    this.edges = [];
  }
}

export class Node {
  value: any;
  edges: Array<Node>;

  constructor(value: any) {
    this.value = value;
    this.edges = [];
  }
}

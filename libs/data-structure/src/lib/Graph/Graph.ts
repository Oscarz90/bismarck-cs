import { Node } from './Node';

export class Graph<T> {
  directed: boolean;
  nodes: Array<Node>;

  constructor(directed = false) {
    this.directed = directed;
    this.nodes = [];
  }

  addNode(value: T) {
    this.nodes.push(new Node(value));
  }

  removeNode(value: T) {
    const isNotThisNode = (nodeValue: T) => {
      return (node: Node) => node.value !== nodeValue;
    };

    // filter main node's list
    this.nodes = this.nodes.filter(isNotThisNode(value));
    // filter every node's edges
    this.nodes.forEach((node: Node) => {
      node.edges = node.edges.filter(isNotThisNode(value));
    });
  }

  getNode(value: T): Node | undefined {
    return this.nodes.find((node: Node) => node.value === value);
  }

  addEdge(firstValue: T, secondValue: T) {
    const firstNode: Node | undefined = this.getNode(firstValue);
    const secondNode: Node | undefined = this.getNode(secondValue);

    if (firstNode && secondNode) {
      firstNode.edges.push(secondNode);

      if (!this.directed) {
        secondNode.edges.push(firstNode);
      }

      return;
    }

    throw new Error('node values not found');
  }
}

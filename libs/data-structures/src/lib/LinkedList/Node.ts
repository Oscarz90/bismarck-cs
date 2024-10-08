export class Node {
  data: any;
  next: Node | null;
  previous: Node | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

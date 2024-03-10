export class Queue{
  constructor(){
    this.queue = [];
  }

  enqueue(data){
    this.queue.push(data)
  }

  dequeue() {
    this.queue.shift();
  }

  peek(){
    return this.queue[0];
  }

  isEmpty(){
    return this.length === 0;
  }
  
  get length() {
    return this.queue.length;
  }
}
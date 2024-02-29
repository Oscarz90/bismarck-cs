class Stack {
  _stack = []
  constructor(){}

  pop(){
    return this._stack.pop();
  }

  push(item) {
    this._stack.push(item);
  }

  peek(){
    return this._stack[this._stack.length -1];
  }

  isEmpty(){
    return this._stack.length === 0;
  }

  get length(){
    return this._stack.length;
  }
}
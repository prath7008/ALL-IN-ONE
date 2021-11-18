class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.size;
  }
  pop() {
    let temp = this.first;
    if (!this.first) {
      return null;
    } else if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

const stack = new Stack();
stack.push("hello");
stack.push("word");
console.log(stack);
stack.pop();

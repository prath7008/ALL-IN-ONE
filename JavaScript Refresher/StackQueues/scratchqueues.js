class Node {
  constructor(value) {
    this.value = value;
    this.nect = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    let temp = this.first;
    if (!this.first) {
      this.first = null;
    } else if (this.first == this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp;
  }
}
const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.dequeue();
console.log(queue);

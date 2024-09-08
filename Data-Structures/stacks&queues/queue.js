class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //   Return the first item from the queue without removing it
  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.first.value;
  }

  //   Add item to the queue
  enqueue(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }

  //   Remove item from queue
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    let temp = this.first;
    this.first = this.first.next;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    this.length--;

    return temp;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

const myQueue = new Queue();
myQueue.enqueue(45);
myQueue.enqueue(10);
// myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);

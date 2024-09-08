// Implement queue in stack

class Queue {
  constructor() {
    this.stack1 = []; // Stack used for enqueue operation
    this.stack2 = []; // Stack used for dequeue operation
  }

  // Enqueue operation: push the element to stack1
  enqueue(value) {
    this.stack1.push(value);
  }

  // Dequeue operation: pop the element from stack2 (if empty, move elements from stack1)
  dequeue() {
    if (this.stack2.length === 0) {
      // Move all elements from stack1 to stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // If stack2 is still empty, the queue is empty
    if (this.stack2.length === 0) {
      return null;
    }

    // Return the top of stack2 (FIFO order)
    return this.stack2.pop();
  }

  // Peek operation: check the first element without removing it
  peek() {
    if (this.stack2.length === 0) {
      // Move all elements from stack1 to stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // If stack2 is still empty, the queue is empty
    if (this.stack2.length === 0) {
      return null;
    }

    // Return the top of stack2 (FIFO order)
    return this.stack2[this.stack2.length - 1];
  }

  // isEmpty operation: check if both stacks are empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.peek()); // 10
console.log(myQueue.dequeue()); // 10
console.log(myQueue.dequeue()); // 20
console.log(myQueue.isEmpty()); // false
console.log(myQueue.dequeue()); // 30
console.log(myQueue.isEmpty()); // true

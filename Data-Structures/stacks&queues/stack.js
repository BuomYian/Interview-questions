class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //   Add item to the top of the stack
  push(value) {
    const newNode = new Node(value);
    // If the stack is empty, set both top and bottom to the new node
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // Otherwise, set the new node's next to the current top and update the top
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }

    this.length++;
    return this;
  } // O(1)

  //   Return top element
  peek() {
    return this.top.value;
  } // O(1)

  //   Remove item from the top of the stack
  pop() {
    if (this.length === 0) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    let popedItem = this.top;
    this.top = this.top.next;
    this.length--;

    return popedItem;
  } // O(1)

  //   Check if stack is empty
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
} // O(n)

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
myStack.pop();
myStack.peek();
console.log(myStack);

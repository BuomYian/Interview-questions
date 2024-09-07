class Stack {
  constructor() {
    this.array = [];
  }

  //   Add item to the top of the stack
  push(value) {
    return this.array.push(value);
  } // O(1)

  //   Return top element
  peek() {
    return this.array[this.array.length - 1];
  } // O(1)

  //   Remove item from the top of the stack
  pop() {
    return this.array.pop();
  } // O(1)

  //   Check if stack is empty
  isEmpty() {
    if (this.array) {
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
// myStack.pop();
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack);

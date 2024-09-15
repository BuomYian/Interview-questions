class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    return this.data[index];
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }

    const firstItem = this.data[0];

    // Re-indexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    if (this.length < 0 || index > this.length - 1) {
      return null;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }

    const item = this.data[index];

    // Re-indexing
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArry = new MyArray();

myNewArry.push(5);
myNewArry.push("Apple");
myNewArry.push("Mango");
myNewArry.push("50");
// myNewArry.shift();
myNewArry.deleteByIndex(0);
console.log(myNewArry);

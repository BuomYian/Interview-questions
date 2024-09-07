class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  } // O(1)

  prepend(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
    }
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = newHead;
    this.length++;
    return this;
  } // O(1)

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  } // O(n)

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);

    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  } // O(n)

  remove(index) {
    // Edge case: if index is out of bounds
    if (index < 0 || index >= this.length) {
      return null;
    }
    // If we're removing the head
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this;
    }
    // Get the leader (node before the one to remove)
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;

    // Skip over the unwanted node
    leader.next = unwantedNode.next;
    unwantedNode.next.prev = leader;

    // If we're removing the tail, update the tail
    if (index === this.length - 1) {
      this.tail = leader;
    }
    this.length--;
    return this;
  } // O(n)

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  } // O(n)
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(5);
myLinkedList.append(15);
myLinkedList.append(25);
myLinkedList.append(32);
myLinkedList.insert(3, 20);
myLinkedList.remove(4);
console.log(myLinkedList.printList());

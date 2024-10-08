class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
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
    const temp = leader.next;
    leader.next = newNode;
    newNode.next = temp;
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
      this.length--;
      return this;
    }
    // Get the leader (node before the one to remove)
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;

    // Skip over the unwanted node
    leader.next = unwantedNode.next;

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

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let currentNode = this.head;
    this.tail = this.head;
    let secondNode = currentNode.next;

    // Loop through the list to reverse the pointers
    while (secondNode) {
      const temp = secondNode.next;
      secondNode.next = currentNode;
      currentNode = secondNode;
      secondNode = temp;
    }
    // After loop, prevNode is now the new head
    this.head.next = null; // The old head is now the tail
    this.head = currentNode; // Update head to the last node
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(5);
myLinkedList.append(15);
myLinkedList.append(25);
myLinkedList.append(17);
myLinkedList.insert(3, 20);
myLinkedList.remove(3);
myLinkedList.reverse();
console.log(myLinkedList.printList());

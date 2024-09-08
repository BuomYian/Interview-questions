class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }

  lookup(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return null;
  }

  remove(value) {}
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const myBinarytree = new BinarySearchTree();
myBinarytree.insert(9);
myBinarytree.insert(4);
myBinarytree.insert(20);
myBinarytree.insert(1);
myBinarytree.insert(6);
myBinarytree.insert(15);
myBinarytree.insert(170);

console.log(myBinarytree.lookup(5));
console.log(myBinarytree);
console.log(JSON.stringify(traverse(myBinarytree.root)));
//       9
//   4      20
// 1  6  15   170

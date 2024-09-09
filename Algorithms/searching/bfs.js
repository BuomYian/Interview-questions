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
  } // O(log N)

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
  } // O(log n)

  remove(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // We've found the node to be removed
        // Case 1: No children (Leaf node)
        if (currentNode.left === null && currentNode.right === null) {
          if (parentNode === null) {
            // Edge case: The tree has only one node (root), which is a leaf
            this.root = null;
          } else if (parentNode.left === currentNode) {
            parentNode.left = null; // Removing the left leaf node
          } else if (parentNode.right === currentNode) {
            parentNode.right = null; // Removing the right leaf node
          }
          this.length--;
          return this;
        }
        // case 2: one child
        if (currentNode.left === null || currentNode.right === null) {
          const childNode = currentNode.left || currentNode.rught; // Pick the existing child
          if (parentNode === null) {
            // Edge case: The node to be removed is the root, and it has one child
            this.root = childNode;
          } else if (parentNode.left === currentNode) {
            parentNode.left = childNode; // Replacing the node to be removed with its child on the left
          } else if (parentNode.right === currentNode) {
            parentNode.right = childNode; // Replacing the node to be removed with its child on the right
          }
          return this;
        }

        // Case 3: two children
        if (currentNode.left !== null && currentNode.right !== null) {
          // Find in-order successor
          let successor = this.finMinValue(currentNode.right);

          //   Replace the value of currentNode with the successor value
          currentNode.value = successor.value;

          //   Recursively delete the successor node
          currentNode.right = this.removeNode(
            currentNode.right,
            successor.value
          );
          return this;
        }
      }
    }
    return null;
  } // O (log N)

  breadthFirstSearch() {
    let currentNode = this.root;
    let queue = [];
    let result = [];

    // Enqueue the root node
    queue.push(currentNode);

    // Add the left child to the queue if it exists
    while (queue.length > 0) {
      // Dequeue the first node in the queue
      currentNode = queue.shift();
      result.push(currentNode.value);

      //   Add the left child to the queue if it exists
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      //   Add the right child to the queue if it exists
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    // Return the result containing the values in BFS order
    return result;
  }

  //   Time Complexity: O(n)
  //   Space complexity: O(n)

  depthFirstSearchInorder() {
    return traverseInorder(this.root, []);
  } // O(n)

  depthFirstSearchPreorder() {
    return traversePreorder(this.root, []);
  } // O(n)

  depthFirstSearchPostorder() {
    return traversePostorder(this.root, []);
  } // O(n)

  finMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null || node.right === null) {
        return node.left || node.right;
      } else {
        let successor = this.findMinValue(node.right);
        node.value = successor.value;
        node.right = this.removeNode(node.right, successor.value);
      }
    }
    return node;
  }
}

function traverseInorder(node, list) {
  // If there's a left node, go deeper into the left subtree
  if (node.left) {
    traverseInorder(node.left, list);
  }
  //   Visit the root node
  list.push(node.value);

  //   If there is a right node, go deeper into the right subtree
  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}

function traversePreorder(node, list) {
  // Visit the root node first
  list.push(node.value);

  // If there's a left node, go deeper into the left subtree
  if (node.left) {
    traversePreorder(node.left, list);
  }
  // If there's a right node, go deeper into the right subtree
  if (node.right) {
    traversePreorder(node.right, list);
  }
  return list;
}

function traversePostorder(node, list) {
  // If there's a left node, go deeper into the left subtree
  if (node.left) {
    traversePostorder(node.left, list);
  }

  //   If there is a right node, go deeper into the right subtree
  if (node.right) {
    traversePostorder(node.right, list);
  }
  // Visit the root node last
  list.push(node.value);
  return list;
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

// console.log(myBinarytree.breadthFirstSearch());
// console.log(JSON.stringify(traverse(myBinarytree.root)));
//       9
//   4      20
// 1  6  15   170

console.log("In-order: ", myBinarytree.depthFirstSearchInorder());
console.log("Pre-order: ", myBinarytree.depthFirstSearchPreorder());
console.log("Post-order: ", myBinarytree.depthFirstSearchPostorder());

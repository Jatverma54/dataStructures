class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;

      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  BFS() {
    let queue = [];
    let result = [];
    let currentNode = this.root;
    queue.push(currentNode);

    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }

  DFSPre() {
    let result = [];

    function traverse(currentNode) {
      result.push(currentNode);
      if (currentNode.left) return traverse(currentNode.left);
      if (currentNode.right) return traverse(currentNode.right);
    }
    traverse(this.root);
    return result;
  }
}

let BsTree = new BSTree();
BsTree.insert(4);
BsTree.insert(1);
BsTree.insert(3);
BsTree.insert(10);
BsTree.insert(7);
BsTree.insert(11);


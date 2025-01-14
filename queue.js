class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  Enqueue(value) {
    const newNode = new Node(value);
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

  Dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return temp;
  }
}

let queue = new Queue(1);
queue.Enqueue(5);
queue.Enqueue(6);
queue.Enqueue(7);

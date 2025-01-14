class Heap {
  #heap = [];

  getHeap() {
    return [...this.#heap];
  }

  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  leftIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  rightIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  swap(arr, firstIndex, secondIndex) {
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
    return arr;
  }

  insert(value) {
    this.#heap.push(value);
    let currentIndex = this.#heap.length - 1;
    while (
      currentIndex > 0 &&
      this.#heap[currentIndex] > this.#heap[this.parentIndex(currentIndex)]
    ) {
      this.swap(this.#heap, currentIndex, this.parentIndex(currentIndex));
      currentIndex = this.parentIndex(currentIndex);
    }
  }

  sinkDown(index) {
    let maxIndex = index;
    let size = this.#heap.length;

    while (true) {
      let leftIndex = this.leftIndex(index);
      let rightIndex = this.rightIndex(index);
      if (leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]) {
        maxIndex = leftIndex;
      } else if (
        rightIndex < size &&
        this.#heap[rightIndex] > this.#heap[maxIndex]
      ) {
        maxIndex = rightIndex;
      }

      if (maxIndex != index) {
        this.swap(this.#heap, maxIndex, index);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  remove() {
    if (!this.#heap.length) return undefined;
    if (this.#heap.length === 1) {
      return this.#heap.pop();
    }
    let max = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.sinkDown(0);
    return max;
  }
}

const heap = new Heap();
heap.insert(3);
heap.insert(34);
heap.insert(2);
heap.insert(62);
heap.remove();

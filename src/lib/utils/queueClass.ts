interface IQueue<T> {
  queue: T[];
  length: number;
  count: number;

  peek(): T;
  enqueue(element: T): void;
  dequeue(): T;
  isEmpty(): boolean;
}

class Queue<T> implements IQueue<T> {
  queue: T[];
  length: number;
  count:number;

  constructor() {
    this.queue = [];
    this.length = 0;
    this.count = 0
  }

  peek() {
    return this.queue[this.length]
  }
  enqueue(element: T) {
    this.queue.push(element)
    this.length += 1
    this.count += 1
  }

  dequeue(): T {
    if (this.isEmpty()) throw new Error('queue is empty!');
    const value = this.queue.shift()
    if(value === undefined) throw new Error('queue is empty!');

    return value
  }

  isEmpty(): boolean {
    return this.length === 0
  }
}

export default Queue
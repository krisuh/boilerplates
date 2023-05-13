export class Queue<T> {
  private queue: T[];

  constructor() {
    this.queue = [];
  }

  public enqueue(value: T): void {
    this.queue.push(value);
  }

  public dequeue(): T | null {
    if (this.size() === 0) {
      return null;
    }
    const val = this.queue[0];
    this.queue = this.queue.slice(1);
    return val;
  }

  public peek(): T | null {
    if (this.size() === 0) {
      return null;
    }
    return this.queue[0];
  }

  public rear(): T | null {
    if (this.size() === 0) {
      return null;
    }
    return this.queue[this.queue.length - 1];
  }

  public size(): number {
    return this.queue.length;
  }
}

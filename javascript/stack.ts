export class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  push(value: T): void {
    this.stack.push(value);
  }

  pop(): T | null {
    if (this.size() === 0) {
      return null;
    }
    const value = this.stack[this.stack.length - 1];
    this.stack = this.stack.slice(0, this.stack.length - 1);
    return value;
  }

  peek(): T | null {
    if (this.size() === 0) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  size(): number {
    return this.stack.length;
  }
}

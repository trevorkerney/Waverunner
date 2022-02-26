class jsTQueue<T> {
  list: Array<T>;
  
  constructor() {
    this.list = [];
  }

  enQ(obj: T): void {
    this.list[this.list.length] = obj;
  }

  deQ(obj: T): T|undefined {
    return this.list.shift();
  }

  length(): number {
    return this.list.length;
  }

  isEmpty(): boolean {
    return (
      (this.list.length > 0)
      ? true
      : false
    )
  }
}

export default jsTQueue;

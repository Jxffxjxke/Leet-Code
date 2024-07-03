const createCounter = (init) => {
  class Counter {
    constructor(init) {
      this.init = init;
      this.count = init;
    }
    increment() {
      this.count++;
      return this.count;
    }
    reset() {
      this.count = this.init;
      return this.count;
    }
    decrement() {
      this.count--;
      return this.count;
    }
  }
  return new Counter(init);
};

const counter = createCounter(5);
counter.increment();
console.log( counter.reset() );

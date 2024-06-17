function* fibGenerator() {
  let n1 = 0;
  let n2 = 1;
  while (true) {
    yield n1;
    [n1, n2] = [n2, n1 + n2];
  }
}

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

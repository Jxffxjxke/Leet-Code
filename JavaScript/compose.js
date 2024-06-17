const compose = (functions) => {
  return (x) => {
      return functions.reduceRight( ( acc, fn ) =>
      {
        console.log(acc);
      return fn(acc);
    }, x);
  };
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const x = 4;

const composeFunc = compose(functions);
const result = composeFunc(x);
console.log(result);

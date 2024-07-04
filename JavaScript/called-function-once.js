const once = (fn) => {
  let called = false,
    result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
      return result;
    }
    return undefined;
  };
};

const fn = (a, b, c) => {
  a + b + c;
};
const onceFn = once(fn);

console.log(onceFn(1, 2, 3));

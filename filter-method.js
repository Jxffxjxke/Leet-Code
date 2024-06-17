const filter = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3];
const fn = (n, i) => {
  return i === 0;
};

const result = filter(arr, fn);
console.log(result);

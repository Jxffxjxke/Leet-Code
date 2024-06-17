const map = (arr, fn) => {
  const result = [];
  arr.forEach((item, i) =>{
    result.push(fn(item, i));
  })
  return result;
};

const arr = [1, 2, 3],
  fn = (n) => {
    return n + 1;
  },
  result = map(arr, fn);

console.log(result);

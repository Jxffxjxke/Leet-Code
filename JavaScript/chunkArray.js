const chunk = function (arr, size) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }
  return chunkedArray;
};

const test = chunk([1, 2, 3, 4, 5], 1);
console.log(test);

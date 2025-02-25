type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
    
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item) && n > 0) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  }

  return result;
};

const findMedianSortedArrays = (nums1, nums2) => {
  const allNums = [...nums1, ...nums2];

  const sortedNums = allNums.sort((a, b) => a - b);
  return sortedNums.length % 2 === 0
    ? (sortedNums[sortedNums.length / 2 - 1] +
        sortedNums[sortedNums.length / 2]) /
        2
    : sortedNums[Math.floor(sortedNums.length / 2)];
};

const resultOdd = findMedianSortedArrays([1, 2, 3], [4, 6]);

console.log(resultOdd);
const resultEven = findMedianSortedArrays([1], [2, 3]);

console.log(resultEven);

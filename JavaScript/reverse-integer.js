const reverse = (x) => {
  if (x < 0) return -1 * reverse(-x);

  const reversed = parseInt(String(x).split("").reverse().join(""), 10);

  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) return 0;

  return reversed;
};

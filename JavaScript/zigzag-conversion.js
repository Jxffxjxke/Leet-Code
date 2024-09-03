const convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;

  const arr = new Array(numRows).fill().map((x) => []);

  let i = 0;
  let down = true;

  for (const letter of s) {
    arr[i].push(letter);

    if (i === numRows - 1) down = false;
    if (i === 0) down = true;

    i += down ? 1 : -1;
  }

  return arr.reduce((result, current) => {
    return result.concat(current.join(""));
  }, "");
};

const str = "PAYPALISHIRING";
const row = 3;

const result = convert(str, row);

console.log(result);

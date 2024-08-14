Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  const array = Array.from(Array(rowsCount), () =>
    new Array(colsCount).fill(null)
  );

  let row = 0;
  let col = 0;
  let snailDown = true;

  for (let i = 0; i < this.length; i++) {
    array[row][col] = this[i];

    if (snailDown) {
      if (row + 1 < rowsCount && array[row + 1][col] === null) {
        row++;
      } else {
        snailDown = false;
        col++;
      }
    } else {
      if (row - 1 >= 0 && array[row - 1][col] === null) {
        row--;
      } else {
        snailDown = true;
        col++;
      }
    }
  }

  return array;
};

const start = [
    19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
  ],
  rows = 5,
  cols = 4;

const snailed = start.snail(rows, cols);

console.log(snailed);

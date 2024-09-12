const myAtoi = (s) => {
  if (s.length === 0 || s.length >= 200) {
    return 0;
  }

  const regex = /^[\s_]*([+-]?)(\d+)/;

  const match = s.match(regex);

  if (!match) {
    return 0;
  } else if (match[0] < -2147483648) {
    return 2147483648;
  } else if (match[0] > 2147483647) {
    return 2147483647;
  }
  const number = match[0];

  return Number(number);
};

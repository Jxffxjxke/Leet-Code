const lengthOfLongestSubstring = (string) => {
  if (!string.length) {
    return 0;
  }
  const array = string.split("");

  let longest = 1;

  for (let i = 0; i < array.length; i++) {
    const currentLetters = [array[i]];
    let currentLength = 1;
    for (let y = i + 1; y < array.length; y++) {
      if (!currentLetters.includes(array[y])) {
        currentLength++;
        if (currentLength > longest) {
          longest = currentLength;
        }
        currentLetters.push(array[y]);
      } else {
        y = array.length;
      }
    }
  }
  return longest;
};

const result = lengthOfLongestSubstring("abcabcbb");
console.log(result);

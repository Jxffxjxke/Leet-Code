const longestPalindrome = (string) => {
  let palindrome = "";
  let length = string.length;
  let array = string.split("");

  for (let i = 0; i < length; i++) {
    let currentPalindrome = array[i];
    if (array[i - 1] === array[i + 1]) {
      currentPalindrome = string.slice(i - 1, i + 2);
    }
    if (currentPalindrome.length > palindrome.length) {
      palindrome = currentPalindrome;
    }
  }
  return palindrome;
};

const result = longestPalindrome("aba");
console.log(result);

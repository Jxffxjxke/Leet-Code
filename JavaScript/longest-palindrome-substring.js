const longestPalindrome = (string) => {
  let palindrome = "";
  let length = string.length;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < length && string[left] === string[right]) {
      left--;
      right++;
    }
    return string.slice(left + 1, right);
  };

  for (let i = 0; i < length; i++) {
    let oddPalindrome = expandAroundCenter(i, i);
    if (oddPalindrome.length > palindrome.length) {
      palindrome = oddPalindrome;
    }

    let evenPalindrome = expandAroundCenter(i, i + 1);
    if (evenPalindrome.length > palindrome.length) {
      palindrome = evenPalindrome;
    }
  }

  return palindrome;
};

const result = longestPalindrome("aba");
console.log(result);

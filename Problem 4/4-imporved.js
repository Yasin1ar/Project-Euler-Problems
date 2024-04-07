// Problem 4 : https://projecteuler.net/problem=4


// this function gets a number as input and reverses, compares with the original input it then return a boolean
function isPalindrome(number) {
  let reversedNum = 0;
  let n = number;
  while (n >= 1) {
    let digit = n % 10;
    reversedNum = reversedNum * 10 + digit;
    n = ~~(n / 10);
  }
  return number === reversedNum;
}

// looping until we find the largest palindrome number
let largestPalindromeNum = 0;
for (let i = 999; i > 100; i--) {
  for (let j = 999; j > 100; j--) {
    let number = i * j;
    if (number <= largestPalindromeNum) break;
    if (isPalindrome(number)) largestPalindromeNum = number;
  }
}

console.log(largestPalindromeNum);

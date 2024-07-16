// Problem 4 : https://projecteuler.net/problem=4
// The efficient Approach
// Solution caught from projecteuler.net
/*

  function isPalindrome(n)
      reversed = 0
      while n > 0
      reversed = 10*reversed + n mod 10
      n = n/10
      return n == reversed


  largestPalindrome = 0
  a = 999
  while a >= 100
  if a mod 11 = 0
  b = 999
  db = 1
  else
  b = 990 //The largest number less than or equal 999
  //and divisible by 11
  db = 11
  while b >= a
  if a*b <= largestPalindrome
  break
  if isPalindrome(a*b)
  largestPalindrome = a*b
  b = b-db
  a = a-1
  output largestPalindrome
*/ 
function isPalindrome(number) {
  let reversedNum = 0;
  let n = number;
  while (n >= 1) {
    let digit = n % 10;
    reversedNum = reversedNum * 10 + digit;
    n = Math.floor(n / 10);
  }
  return number === reversedNum;
}

let largestPalindromeNum = 0;

let a = 999;
let b;
let db;
while (a >= 100) {
  // Check if a is divisible by 11
  if (a % 11 === 0) {
    b = 999;
    db = 1;
  } else {
    b = 990;
    db = 11;
  }
  while (b >= a) {
    // Check if the product of a and b is less than or equal to the current largest palindrome number
    if (a * b <= largestPalindromeNum) break;
    // Check if the product of a and b is a palindrome
    if (isPalindrome(a * b)) largestPalindromeNum = a * b;
    b -= db;
  }
  a -= 1;
}

console.log(largestPalindromeNum);

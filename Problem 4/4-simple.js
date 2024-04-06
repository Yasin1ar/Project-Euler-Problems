// Problem 4 : https://projecteuler.net/problem=4

/*
    pseudocode :
        function isPalindrome(number):
            reversedNum 
            n = number;
            while (n >= 1):
                digit = n % 10;
                reversedNum = (reversedNum * 10) + digit;
                n = round(n / 10);
            return number == reversedNum

        largestPalindromeNum = 0;
        for i in range 999 -> 100:
            for j in range 999 -> 100:
                if isPalindrome((i*j)) AND (i*j) > largestPalindrome:
                    largestPalindromeNum = (i*j)
        
        print largestPalindromeNum

*/
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
let largestPalindrome = 0;
for (let i = 999; i > 900; i--) {
  for (let j = 999; j > 900; j--) {
    let number = i * j;
    if (isPalindrome(number)) {
      if (number > largestPalindrome) {
        largestPalindrome = number;
      }
    }
  }
}

console.log(largestPalindrome);

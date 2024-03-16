// Problem 3 : https://projecteuler.net/problem=3

/*
    1: find the prime factors of N
    2: return the largest one
*/

function largestPrimeFactor(n) {
  /**
   * Find the largest prime factor of a given number.
   *
   * @param {number} n - The number to find the largest prime factor of.
   * @returns {number} - The largest prime factor of the given number.
   */
  let largestFactor = 1;
  const sqrtNum = Math.ceil(Math.sqrt(n));
  for (let i = 2; i <= sqrtNum + 1; i++) {
    if (n % i === 0 && isPrime(i)) {
      largestFactor = i;
    }
  }
  return largestFactor;
}

function isPrime(num) {
  /**
   * Check if a given number is prime.
   *
   * @param {number} num - The number to check for primality.
   * @returns {boolean} - True if the number is prime, false otherwise.
   */
  if (num <= 1 || num % 2 === 0) {
    return false;
  }
  const sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 3; i < sqrtNum + 1; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const number = 600851475143;
const lpf = largestPrimeFactor(number);
console.log("Largest prime Factor of " + number + " is : " + lpf);

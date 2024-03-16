// Problem 3 : https://projecteuler.net/problem=3

/*
    1: find the prime factors of N
    2: return the largest one
*/

function factor(n) {
  // finds the prime factors of the number and returns it, if found none, returns 1 which is a prime factor
  let factors = [];
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0 && isPrime(i)) {
      factors.push(i);
    }
  }
  if (factors.length === 0) return 1;
  return factors.pop();
}

function isPrime(num) {
  // checks if the number is prime or not, returns a boolean, true or false
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const number = 600851475143;
console.log(factor(number));

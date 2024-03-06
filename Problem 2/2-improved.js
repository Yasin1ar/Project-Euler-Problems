// Problem 2 : https://projecteuler.net/problem=2

/*
    Each new term in the Fibonacci sequence is generated by adding the previous two terms:

    1: Calculate fibonacci consider values do not exceed four million
    2: find the even value terms
    3: return the sum of them

    'The Recursive approach'

*/

function sumOfEvenTerms(limit) {
  /**
   * Calculates the sum of even terms in the Fibonacci sequence up to a given limit.
   *
   * @param {number} limit - The upper limit for the Fibonacci terms.
   * @returns {number} - The sum of even terms in the Fibonacci sequence.
   */
  let sum = 0;
  let prev = 1;
  let curr = 1;
  let n = 1;
  while (curr <= limit) {
    if (curr % 2 === 0) sum += curr;
    [prev, curr] = [curr, prev + curr];
    n += 3;
  }
  return sum;
}

function calculateAndLogSumOfEvenTerms(limit) {
  const sum = sumOfEvenTerms(limit);
  console.log(sum);
  return sum;
}

const limit = 4 * 10 ** 6;
calculateAndLogSumOfEvenTerms(limit);

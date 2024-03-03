// Problem 1 : https://projecteuler.net/problem=1

/* 
   1: find all the multiples of 3 or 5 below 1000
   2: add them 
   3: return the sum 
*/

// Function to check if a number is a multiple of 3 or 5
function isMultiplies(number) {
    // Check if the number is divisible by 3 or 5 using the modulo operator (%)
    if (number % 3 === 0 || number % 5 === 0) {
      return true; // Return true if the number is a multiple
    }
  }
  
// Initialize variables
let sum = 0;
const target = 1000;

// Loop through numbers from 1 to target-1
for (let i = 1; i < target; i++) {
    // Check if the number is a multiple of 3 or 5
    if (isMultiplies(i)) {
        sum += i; // Add the number to the sum
    }
}

console.log(sum); // Output the sum of the multiples




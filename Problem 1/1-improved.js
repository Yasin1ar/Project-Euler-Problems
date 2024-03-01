// Function to check if a number is a multiple of 3 or 5
function isMultipleOfThreeOrFive(number) {
  // Check if the number is divisible by 3 or 5 using the modulo operator (%)
  if (number % 3 === 0 || number % 5 === 0) {
    return true; // Return true if the number is a multiple
  }
}

// Function to find the sum of multiples of 3 or 5 below a target number
function sumOfMultiples(target) {
  // Initialize variables
  let sum = 0;

  // Loop through numbers from 1 to target-1
  for (let i = 1; i < target; i++) {
    // Check if the number is a multiple of 3 or 5
    if (isMultipleOfThreeOrFive(i)) {
      sum += i; // Add the number to the sum
    }
  }

  return sum; // Return the sum of the multiples
}

const target = 1000;
const sum = sumOfMultiples(target);
console.log(sum); // Output the sum of the multiples

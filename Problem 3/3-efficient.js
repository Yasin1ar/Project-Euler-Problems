// Problem 3 : https://projecteuler.net/problem=3
/*
    The Best Solution
    Solution caught from projecteuler.net

    pseudo code :

    n=”the evil big number”
    if n mod 2=0 
    then
        lastFactor=2
        n=n div 2
        while n mod 2=0     
            n=n div 2
    else
        lastFactor=1
        factor=3
    maxFactor= sqrt n
    while n>1 and factor<=maxFactor
        if n mod factor=0 
        then
            n=n div factor
            lastFactor=factor
            while n mod factor=0 
                n=n div factor
        maxFactor= sqrt n
        factor=factor+2

    if n=1 
    then 
        output lastFactor
    else 
        output n

*/

let numToFactorize = 600851475143;
let lastFactor;

// Check if numToFactorize is divisible by 2
if (numToFactorize % 2 === 0) {
  lastFactor = 2;
  while (numToFactorize % 2 === 0) {
    numToFactorize /= 2;
  }
} else {
  lastFactor = 1;
}

let factor = 3;
let maxFactor = Math.sqrt(numToFactorize);

// Find the largest prime factor
while (numToFactorize > 1 && factor < maxFactor) {
  if (numToFactorize % factor === 0) {
    lastFactor = factor;
    while (numToFactorize % factor === 0) {
      numToFactorize /= factor;
    }
  }
  maxFactor = Math.sqrt(numToFactorize);
  factor += 2;
}

// Output the largest prime factor
if (numToFactorize === 1) {
  console.log(lastFactor);
} else {
  console.log(numToFactorize);
}

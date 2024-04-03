// Problem 1 : https://projecteuler.net/problem=1

/*

psudocode for efficient Solution:

target=999
Function SumDivisibleBy(n)
p=target div n
return n*(p*(p+1)) div 2
EndFunction
Output SumDivisibleBy(3)+SumDivisibleBy(5)-SumDivisibleBy(15)

Solution caught from https://projecteuler.net/overview=0001

*/

const efficientSolution = (target) => {
  const sumDivisibleBy = (n) => {
    const p = Math.floor(target / n);
    return (n * p * (p + 1)) / 2;
  };

  const sum = sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
  console.log(sum);
};

efficientSolution(1000);
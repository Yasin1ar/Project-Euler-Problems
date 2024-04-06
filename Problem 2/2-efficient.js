// Problem 2 : https://projecteuler.net/problem=2

// 'The best approach'
// Solution caught from projecteuler.net

/*
    It is easy to prove that every third Fibonacci number is even.
    It is not so difficult to change the program somewhat so that only every third number is 
    added:

    limit=4000000
    sum=0
    a=1
    b=1
    c=a+b
    while c<limit
        sum=sum+c
        a=b+c
        b=c+a
        c=a+b
    output sum
*/

const limit = 4 * 10 ** 6;
let sum = 0;
let a = 1;
let b = 1;
let c = a + b;
while (c < limit) {
  sum += c;
  a = c + b;
  b = a + c;
  c = a + b;
}

console.log(sum);

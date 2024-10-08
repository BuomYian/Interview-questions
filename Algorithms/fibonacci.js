// Given a numer N return the index value of the Fibonacci
// sequence, where the sequence is:
// 0,1,1,2,3,5,8,13,21,34,55,89,144,...
// The pattern of the sequence is that each
// value is the sum of the previous values, that means that N=5 -> 2+3

function fibonacciIterative(n) {
  if (n < 2) return n;

  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
} // O(n)

function fibonacciRecursive(n) {
  // Return 0 if n is 0, return 1 if n is 1
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} // O(2^n)

// Using dynamic programming
function fibonacciDynamic() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
} // O(n)

// console.log(fibonacciIterative(8));
// console.log(fibonacciRecursive(8));

const fib = fibonacciDynamic();
console.log(fib(6));

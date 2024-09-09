// Write two fundtions that finds the factorial
// of any number. One should use recursion,
// the other should just use a for loop

function recursiveFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

function iterativeFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
} // O(n)

console.log(recursiveFactorial(6));
console.log(iterativeFactorial(5));

// 4 * 3 * 2 * 1

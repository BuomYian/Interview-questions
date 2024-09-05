# Big O Cheat Sheet

This cheat sheet provides a quick reference to Big O time and space complexity, which is essential for understanding algorithm efficiency.

## Big O Notation

- **O(1) Constant Time:**  
  No loops, time complexity remains the same regardless of input size.
- **O(log N) Logarithmic Time:**  
  Typically occurs in algorithms like binary search where input size is halved with each iteration.
- **O(n) Linear Time:**  
  Common in loops that iterate through `n` items once.

- **O(n log n) Log Linear Time:**  
  Generally found in efficient sorting algorithms like Merge Sort and Quick Sort.

- **O(n²) Quadratic Time:**  
  Occurs when each item is compared to every other item, such as in algorithms with two nested loops.

- **O(2^n) Exponential Time:**  
  Seen in recursive algorithms that solve a problem of size `n` by solving smaller subproblems.

- **O(n!) Factorial Time:**  
  Involves adding a loop for every element, common in algorithms that generate all permutations of an input.

### Additional Notes:

- Iterating through half a collection is still `O(n)`.
- Two separate collections with sizes `a` and `b` result in `O(a * b)` complexity.

---

## What Can Cause Time in a Function?

1. **Operations:**  
   Arithmetic operations (`+`, `-`, `*`, `/`)
2. **Comparisons:**  
   Conditional checks (`<`, `>`, `==`)
3. **Looping:**  
   `for`, `while` loops

4. **Function Calls:**  
   Invoking other functions.

---

## Big O Rulebook

1. **Always Consider the Worst Case:**  
   Analyze based on the most time-consuming scenario.
2. **Remove Constants:**  
   Ignore constant factors (e.g., `O(2n)` simplifies to `O(n)`).

3. **Different Inputs, Different Variables:**  
   Use different variables for different inputs (e.g., `O(a + b)` for two separate inputs). Nested operations lead to `O(a * b)`.

4. **Drop Non-Dominant Terms:**  
   Keep only the most significant term (e.g., `O(n² + n)` simplifies to `O(n²)`).

---

## What Causes Space Complexity?

1. **Variables:**  
   Memory used by variables declared within a function.

2. **Data Structures:**  
   Memory used by arrays, lists, objects, etc.

3. **Function Calls:**  
   Stack memory consumed by recursive function calls.

4. **Allocations:**  
   Memory allocation for objects, arrays, etc.

---

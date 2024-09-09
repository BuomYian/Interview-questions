function linearSearch(arr, target) {
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element matches the target
    if (arr[i] === target) {
      return i; // Return the index if found
    }
  }
  // If not found, return -1
  return -1;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(linearSearch(numbers, 87)); // Output: 7
console.log(linearSearch(numbers, 100)); // Output: -1

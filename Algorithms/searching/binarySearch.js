function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // find the mid element
    const mid = Math.floor((left + right) / 2);

    // Check if mid is the target
    if (arr[mid] === target) {
      return mid;
    }

    // If target is smaller, search left half
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      // Search the right half
      left = mid + 1;
    }
  }

  //   return -1 if not found
  return -1;
}

const numbs = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
console.log(binarySearch(numbs, 87));
console.log(binarySearch(numbs, 100));

function binarySearchRecursive(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    // Search the left half
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    // Search the right half
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}

const sortedNumbersRec = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
console.log(
  binarySearchRecursive(sortedNumbersRec, 283, 0, sortedNumbersRec.length - 1)
);

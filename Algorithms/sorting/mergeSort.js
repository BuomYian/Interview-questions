const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(nums) {
  if (nums.length === 1) {
    return nums;
  }

  //   Split the array into right and left
  const middleIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIndex);
  const right = nums.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from left and right arrays and
  // push the smaller on into result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  //   If any elements are left in either array, push them into result
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Time complexity: O(n log n);
// Space complexity: O(n)

console.log(mergeSort(numbers));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  //   Choose the pivot
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  //   Partition the array
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  //   Recursively apply quicksort on left and right partions
  //   and return the sorted array
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// Time complexity: O(n^2)
// Space complexity: O(nlogn)

console.log(quickSort(numbers));

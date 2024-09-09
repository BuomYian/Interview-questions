const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(nums) {
  if (nums.length < 2) return nums;

  for (let i = 0; i < nums.length; i++) {
    // set current index as minimum
    let min = i;
    let temp = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        // Update min
        min = j;
      }
    }
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
}

// Time complexity: O(n^2)

console.log(selectionSort(numbers));

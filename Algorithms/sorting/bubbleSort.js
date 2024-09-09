const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(nums) {
  if (nums.length === 1) {
    return nums;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        // Swap numbers
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

// Time complexity: O(n^2)
// Space complexity: O(1)

console.log(bubbleSort(numbers));

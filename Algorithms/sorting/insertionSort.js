const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(nums) {
  if (nums.length < 2) {
    return nums;
  }

  //  Go through each element starting from the second one
  for (let i = 1; i < nums.length; i++) {
    let currentValue = nums[i];
    let j = i - 1;

    // compare the current element with the sorted portion
    while (j >= 0 && nums[j] > currentValue) {
      nums[j + 1] = nums[j];
      j--;
    }
    // Insert the current element at its correct position
    nums[j + 1] = currentValue;
  }
  return nums;
}

console.log(insertionSort(numbers));

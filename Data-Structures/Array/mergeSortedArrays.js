// Merge sorted array
// [0,3,4,4,6,30,31], [4,6,30]

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  //   Comparing elements in the arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, add them to merged
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  // If there are remaining elements in arr2, add them to merged
  while (j < arr2.length) {
    merged.push(arr2[j]);
  }

  return merged;
}

console.log(mergeSortedArrays([0, 3, 4, 4, 6, 30, 31], [4, 6, 30]));

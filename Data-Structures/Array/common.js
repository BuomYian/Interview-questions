// Given two arrays, create a function that let a user know (true/false) whether these two arrays contain any common items
// function commonItems(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "u", "w"];

//console.log(commonItems(array1, array2)); // O(n^2)

function hasCommonItem(arr1, arr2) {
  // Loop through first array and create an object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  //   Loop through second array and check if item in second array exists on created
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(hasCommonItem(array1, array2)); // O(n)

function hasCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(hasCommonItem3(array1, array2)); // O(n)

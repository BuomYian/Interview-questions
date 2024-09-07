// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2
// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1
// Given an array = [2,3,4,5]:
// It should return undefined

// Brute force approach
// function firstRepeatedNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       }
//     }
//   }
//   return undefined;
// }
// O(n^2)

function firstRepeatedNumber2(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      return arr[i];
    } else {
      obj[arr[i]] = true;
    }
  }
  return undefined;
}

console.log(firstRepeatedNumber2([2, 0, 0, 4, 5]));
// O(n)

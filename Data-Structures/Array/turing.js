// Given a string S, return the reversed string where all characters
// that are not a letter stay in the same place,
// and all letter reverse their positions.
// ab-cd -> dc-ba

function reverseOnlyLetters(S) {
  let SArr = S.split(""); // Split string into array for easy swapping
  let left = 0;
  let right = S.length - 1;

  while (left < right) {
    if (!/[a-zA-Z]/.test(SArr[left])) {
      left++; // Move left pointer if it's not a letter
    } else if (!/[a-zA-Z]/.test(SArr[right])) {
      right--; // Move right pointer if it's not a letter
    } else {
      // Swap the letters at 'left' and 'right'
      [SArr[left], SArr[right]] = [SArr[right], SArr[left]];
      left++;
      right--;
    }
  }

  return SArr.join(""); // Join array back into a string and return it
}

let someChars = "as-df!fs3jh%dc/df";
console.log(reverseOnlyLetters(someChars)); // Output: "dc-ba"

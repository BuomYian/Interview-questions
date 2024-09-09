// Given a string s, return the most frequent character
// (an alphabet) in the string s

function mostFrequentChar(s) {
  let charCount = {}; // An object to store the frequency of each character.
  let maxChar = ""; // To keep track of the character with the highest frequency.
  let maxCount = 0; // To keep track of the highest frequency count.

  for (let char of s) {
    if (/[a-zA-Z]/.test(char)) {
      // Ensure the character is an alphabet
      charCount[char] = (charCount[char] || 0) + 1;

      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        maxChar = char;
      }
    }
  }
  return maxChar;
}

let s = "ABD75SAA";
console.log(mostFrequentChar(s));

// Given a string s, find the length of the longest sub
// string without repeating any charater.

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1;
    }

    charIndexMap.set(char, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

const ReverseString = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  //   Palindrome check
  if (reversed === str) {
    return "It is a palindrome";
  }
  return reversed;
};

console.log(ReverseString("wow"));

const stringReverse = (str) => str.split("").reverse().join("");

console.log(stringReverse("Yian"));

// Create a function that reverse a string:
// "Hi My name is Andrei" should be:
// "ierdnA si eman iH"

function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmm that is not a string";
  }

  let stringToArray = str.split("");
  let emptyString = "";

  for (let i = stringToArray.length - 1; i >= 0; i--) {
    emptyString += stringToArray[i];
  }
  return emptyString;
}

const someString = "Hi My name is Andrei";
console.log(reverseString(someString));

// Time complexity: O(n)

const reverse2 = (str) => str.split("").reverse().join("");

console.log(reverse2(someString));

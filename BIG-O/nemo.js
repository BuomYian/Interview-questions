// Big O rules
// Worst Case
// Remove Constants
// Different terms for inputs
// Drop Non Dominants

const nemo = ["nemo"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo");
    }
  }
}

findNemo(nemo);

// Time complexity: O(n) since we iterate through the array once
// Linear time

function compressFirstBox(boxes) {
  console.log(boxes[0]);
}

const boxes = [["nemo"], ["dory"], ["marlin"]];
compressFirstBox(boxes);

// Time complexity: O(1) since we only access the first element of the array

function funChanllenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input; i++) {
    // O(n)
    anotherFunc(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// Time complexity
// O (3 + n + n + n + n)
// O (3 + 4n)
// O (n)

function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;

  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }

  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }

  let whoAmI = "I don't know";
}

// Time complexity:
// O (3 + 3n + 2n 1)
// O (4 + 5n)
// O (n)

function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

// Time Complexity
// O (2n)
// O(n)

function compressBoxesTwice(boxes1, boxes2) {
  boxes1.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// Time Complexity
// O (n + m): Differrnt terms for different inputs
// O(n + m)

// Log all pairs of array
const items = ["a", "b", "c", "d"];

function logAllPairsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

logAllPairsOfArray(items);

// Time complexity
// O (n * n)
// O(n^2) - quadratic time

function printAllNumbersThenAllPairSums(numbers) {
  console.log("These are the numbers");

  numbers.forEach(function (number) {
    console.log(number);
  }); // O(n)

  console.log("And these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  }); // O(n^2)
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
// O(n + n^2)
// O(n^2)

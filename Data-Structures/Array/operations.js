const strings = ["a", "b", "c", "d"];

// Push operation: add item to the end of the array
strings.push("e"); // O(1)

// Pop operation: remove item from the top of the list
strings.pop(); // O(1)

// Unshift: add item to the beginning of the array
strings.unshift("x"); // O(n)

// shift: remove item from the beginning of the array
strings.shift(); // O(n)

// splice: add item to the middle of an array
strings.splice(3, 0, "newElement"); // O(n)

console.log(strings);

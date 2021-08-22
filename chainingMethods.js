const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
const descendingOrder = integers.sort((a, b) => b - a );

// Remove any integers greater than 19.
const lessThan19 = integers.filter(a => a < 19);

// Multiply each remaining number by 1.5 and then subtract 1.
const newArray = lessThan19.map(a => a * 1.5 - 1);

// Then output (either in the DOM or the console) the sum of all the resulting numbers.
console.log(newArray.reduce((a, b) => a + b));

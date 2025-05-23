// Given an array of integers, identify the highest value that appears only once in the array. If no such number exists, return -1.

// Examples:

// Example 1:

// Input: [5, 7, 3, 7, 5, 8]
// Expected Output: 8
// Justification: The number 8 is the highest value that appears only once in the array.
// Example 2:

// Input: [1, 2, 3, 2, 1, 4, 4]
// Expected Output: 3
// Justification: The number 3 is the highest value that appears only once in the array.
// Example 3:

// Input: [9, 9, 8, 8, 7, 7]
// Expected Output: -1
// Justification: There is no number in the array that appears only once.

let num = [12, 11, 3, 10, 12, 10, 11];
console.log(highestUniqueNum(num));
function highestUniqueNum(arr) {
  const count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  const uniqueNumbers = Object.keys(count)
    .filter((key) => count[key] == 1)
    .map(Number);

  return uniqueNumbers.length > 0 ? Math.max(...uniqueNumbers) : -1;
}

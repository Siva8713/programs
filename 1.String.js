// Given a string, identify the position of the first character that appears only once in the string. If no such character exists, return -1.

// Examples

// Example 1:

// Input: "apple"
// Expected Output: 0
// Justification: The first character 'a' appears only once in the string and is the first character.
// Example 2:

// Input: "abcab"
// Expected Output: 2
// Justification: The first character that appears only once is 'c' and its position is 2.
// Example 3:

// Input: "abab"
// Expected Output: -1
// Justification: There is no character in the string that appears only once.

//Solution 1
let str = "abab";
let lStr = str.toLowerCase(str);
let length = str.length;
let repeatIndex = -1;
for (let i = 0; i < str.length; i++) {
  let checkValue = lStr.charAt(i);
  if (!lStr.slice(i + 1, length).includes(checkValue)) {
    console.log(i);
    break;
  }
}

//Solution 2:
let str1 = "apple";
function firstUniqueChar(str1) {
  const charCount = {};
  for (const char in str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < str1.length; i++) {
    if (charCount[str1[i]] === 1) {
      return i;
    }
  }
  return -1;
}

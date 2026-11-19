
// JavaScript Practice Examples

// 1. Calculate the sum of an array
function calculateSum(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

// 2. Reverse a string
function reverseText(text) {
  return text.split("").reverse().join("");
}

// 3. Find even numbers
function findEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

// 4. Capitalize the first letter
function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// 5. Find the largest number
function findLargest(numbers) {
  return Math.max(...numbers);
}

// Example usage
console.log(calculateSum([2, 4, 6]));
console.log(reverseText("javascript"));
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(capitalize("hello world"));
console.log(findLargest([10, 25, 8, 40]));

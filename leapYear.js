// 1. Declare a variable outside the function
let year = 2024;

// 2. Define the isLeapYear function
function isLeapYear(number) {

  // 3. Apply the leap year rules
  if (number % 400 === 0) {
    return `${number} is a leap year.`;
  } else if (number % 100 === 0) {
    return `${number} is not a leap year.`;
  } else if (number % 4 === 0) {
    return `${number} is a leap year.`;
  } else {
    return `${number} is not a leap year.`;
  }
}

// 4. Call the function and store the result
const result = isLeapYear(year);

// 5. Output the result
console.log(result);

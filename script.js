// Prompt the user for the first number
const number1 = prompt("Enter the first number:");

// Prompt the user for the second number
const number2 = prompt("Enter the second number:");

// Convert the input strings to numbers for accurate comparison
const num1 = parseFloat(number1);
const num2 = parseFloat(number2);

// Compare the two numbers and show the result in an alert
const areEqual = num1 === num2;
alert("The numbers are equal: " + areEqual);

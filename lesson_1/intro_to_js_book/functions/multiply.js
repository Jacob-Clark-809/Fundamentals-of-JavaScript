let rlSync = require('readline-sync');

function question(text) {
  return rlSync.question(text);
}

let multiply = (a, b) => a * b;

let num1 = Number(question("Enter the first number: "));
let num2 = Number(question("Enter the second number: "));
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
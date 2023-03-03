const readlineSync = require('readline-sync');
let scores = [];

for (let index = 1; index <= 3; index += 1) {
  console.log(`Enter score ${index}:`);
  let score = Number(readlineSync.prompt());
  scores.push(score);
}

let average_score = scores.reduce((acc, current) => acc + current) / 3;
let grade;
if (average_score >= 90) {
  grade = 'A';
} else if (average_score >= 70) {
  grade = 'B';
} else if (average_score >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the average of your 3 scores your grade is "${grade}"`);
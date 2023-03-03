const password = 'password';
const readlineSync = require('readline-sync');
let attempts = 0;
let attempt;

while (attempts < 3) {
  console.log('What is the password:');
  attempt = readlineSync.prompt();
  if (attempt === password) {
    break;
  }
  attempts += 1;
}

if (attempt === password) {
  console.log('You have successfully logged in.');
} else {
  console.log('You have been denied access.');
}

let rlSync = require('readline-sync');

function question(text) {
  return rlSync.question(text);
}

let firstName = question('What is your first name?');
let lastName = question('What is your last name?');

console.log(`Hello, ${firstName} ${lastName}!`);
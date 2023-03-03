function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

/*
Set word to 'hello'.
set capitalizeWOrd to 'Hello'.
set exclaimedWOrd to 'hello!!!' which in the process reassigns word to the
same value.

So output: 'hello!!!', 'Hello', 'hello!!!'
*/
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

/*
We declare and initialize the global variable word on line 9 to the value
'hello'.
On line 2 we call the capitalize() method passing in the value of word
as an argument. This function calls word[0] which returns a new value 'h',
then calls toUpperCase() on 'h' which returns a new value 'H' and the
concatenates this with the return value of slice() with argument 1 which
is the new string value 'ello'. This combines to the new string value
'Hello' which is returned by the method. All these methods are called on the
word paremeter and not the word global variable. The return value 'Hello' is
then assigned to capitalizeWord.

Bla Bla Bla ...

Output: 'hello', 'Hello', 'Hello!!!'
*/
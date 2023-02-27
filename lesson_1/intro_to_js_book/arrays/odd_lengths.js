function oddLengths(array) {
  return array.map(element => element.length).filter(element => element % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

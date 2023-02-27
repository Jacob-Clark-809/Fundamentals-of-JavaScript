function oddLengths(array) {
  return array.reduce(function(acc, val) {
    if (val.length % 2 === 1) {
      acc.push(val.length);
    }
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
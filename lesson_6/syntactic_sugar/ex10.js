function foo(...strings) {
  let last = strings.pop();
  let [ first, ...middle ] = strings;
  middle.sort();
  return {
    first,
    middle,
    last,
  };
}

let args = ['first', 'second', 'third', 'fourth', 'fifth'];
let result = foo(...args);
let { first, middle, last } = result;
console.log(first, middle, last);
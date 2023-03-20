function missing(array) {
  let result = [];
  for (let index = 0; index < array.length - 1; index += 1) {
    result = result.concat(numsBetween(array[index], array[index + 1]));
  }

  return result;
}

function numsBetween(start, end) {
  let result = [];
  for (let index = start + 1; index < end; index += 1) {
    result.push(index);
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
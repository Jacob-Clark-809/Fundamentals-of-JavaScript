function slice(array, start, end) {
  let result = [];
  for (let index = start; index < end; index += 1) {
    result.push(array[index]);
  }

  console.log(result);
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]
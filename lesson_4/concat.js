function concat(arr1, arr2) {
  let result = [];
  for (let index = 0; index < arr1.length; index += 1) {
    result.push(arr1[index]);
  }

  for (let index = 0; index < arr2.length; index += 1) {
    result.push(arr2[index]);
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
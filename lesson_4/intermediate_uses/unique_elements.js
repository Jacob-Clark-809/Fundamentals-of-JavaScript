function uniqueElements(arr) {
  let unique = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (!unique.includes(arr[index])) {
      unique.push(arr[index]);
    }
  }

  return unique;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
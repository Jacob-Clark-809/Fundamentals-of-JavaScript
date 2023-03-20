function lastIndexOf(array, value) {
  let valuePosition = -1;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      valuePosition = index;
    }
  }

  return valuePosition;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
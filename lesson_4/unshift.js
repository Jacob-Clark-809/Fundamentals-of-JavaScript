function unshift(array, value) {
  let length = array.length;
  let prev_value = value;
  for (let index = 0; index <= length; index += 1) {
    let current_value = array[index];
    array[index] = prev_value;
    prev_value = current_value;
  }

  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
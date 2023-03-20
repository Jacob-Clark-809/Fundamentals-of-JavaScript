function splice(array, start, amount) {
  let removed = [];
  for (let index = start; index < start + amount; index += 1) {
    if (index >= array.length) break;

    let current = array[index];
    if (index + amount < array.length) {
      array[index] = array[index + amount];
    }
    removed.push(current);
  }

  array.length -= amount;
  return removed;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
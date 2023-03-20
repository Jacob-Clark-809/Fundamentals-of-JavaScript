function join(array, joinor) {
  let result = '';
  for (let index = 1; index < array.length; index += 1) {
    result += String(array[index - 1]) + joinor;
  }

  result += array[array.length - 1];
  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
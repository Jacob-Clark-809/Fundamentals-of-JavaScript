function repeatedCharacters(string) {
  let count = {};
  for (let index = 0; index < string.length; index += 1) {
    let current_char = string[index].toLowerCase();

    if (!Object.keys(count).includes(current_char)) {
      count[current_char] = 0;
    }

    count[current_char] += 1;
  }

  for (let key in count) {
    if (count[key] < 2) {
      delete count[key];
    }
  }

  return count;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
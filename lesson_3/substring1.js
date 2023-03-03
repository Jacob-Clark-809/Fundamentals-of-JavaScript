function substr(string, start, length) {
  if (start < 0) start += string.length;

  let result = '';
  for (let index = start; index < start + length; index += 1) {
    if (string[index] === undefined) {
      continue;
    }

    result += string[index];
  }

  console.log(result);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
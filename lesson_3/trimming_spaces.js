function trim(string) {
  let startingIndex = 0;
  while (string[startingIndex] === ' ') {
    startingIndex += 1;
  }

  let endingIndex = string.length - 1;
  while (string[endingIndex] === ' ') {
    endingIndex -= 1;
  }

  let result = '';
  for (startingIndex; startingIndex <= endingIndex; startingIndex += 1) {
    result += string[startingIndex];
  }

  console.log(result);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
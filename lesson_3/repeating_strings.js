function repeat(string, times) {
  if ((typeof times != 'number') || times < 0) {
    console.log(undefined);
    return;
  }

  let result = '';
  for (times; times > 0; times -= 1) {
    result += string;
  }

  console.log(result);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
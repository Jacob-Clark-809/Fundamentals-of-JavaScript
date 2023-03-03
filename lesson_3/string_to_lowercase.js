function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    let ascii_char = string.charCodeAt(index);
    if (ascii_char >= 65 && ascii_char <= 90) {
      ascii_char += CONVERSION_OFFSET;
    }

    result += String.fromCharCode(ascii_char);
  }

  console.log(result);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
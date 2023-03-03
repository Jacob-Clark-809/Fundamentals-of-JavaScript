const ROTATE_FACTOR = 13;
const TOTAL_LETTERS = 26;

function rot13(sentence) {
  let code = '';
  for (let index = 0; index < sentence.length; index += 1) {
    let currentChar = sentence[index];
    if (currentChar >= 'a' && currentChar <= 'z') {
      currentChar = rotateLetter(currentChar, 'z');
    } else if (currentChar >= 'A' && currentChar <= 'Z') {
      currentChar = rotateLetter(currentChar, 'Z');
    }

    code += currentChar;
  }

  return code;
}

function rotateLetter(letter, maxChar) {
  let rotate_ascii = letter.charCodeAt(0) + ROTATE_FACTOR;
  if (rotate_ascii > maxChar.charCodeAt(0)) {
    rotate_ascii -= TOTAL_LETTERS;
  }

  return String.fromCharCode(rotate_ascii);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

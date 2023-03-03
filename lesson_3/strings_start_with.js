function startsWith(string, searchString) {
  if (searchString === '') {
    console.log(true);
    return;
  }
  if (string.length < searchString.length) {
    console.log(false);
    return;
  }

  for (let index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) {
      console.log(false);
      return;
    }
  }

  console.log(true);
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false
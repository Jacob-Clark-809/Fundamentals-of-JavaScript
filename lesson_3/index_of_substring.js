function indexOf(firstString, secondString) {
  let substrings = allSubstrings(firstString, secondString.length);

  let indexOfSubstring = -1;
  for (let index = 0; index < substrings.length; index += 1) {
    if (substrings[index] === secondString) {
      indexOfSubstring = index;
      break;
    }
  }

  return indexOfSubstring;
}

function lastIndexOf(firstString, secondString) {
  let substrings = allSubstrings(firstString, secondString.length);

  let indexOfSubstring = -1;
  for (let index = 0; index < substrings.length; index += 1) {
    if (substrings[index] === secondString) {
      indexOfSubstring = index;
    }
  }

  return indexOfSubstring;
}

function allSubstrings(word, length) {
  let result = [];
  for (let start = 0; start <= word.length - length; start += 1) {
    let substring = '';
    for (let offset = 0; offset < length; offset += 1) {
      substring += word[start + offset];
    }

    result.push(substring);
  }

  return result;
}

console.log(indexOf('Some strings', 's'));
console.log(indexOf('Blue Whale', 'Whale'));
console.log(indexOf('Blue Whale', 'Blute'));
console.log(indexOf('Blue Whale', 'leB'));

console.log('');

console.log(lastIndexOf('Some strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));
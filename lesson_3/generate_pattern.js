function generatePattern(nStars) {
  let charsNeeded = generateRow(nStars, nStars).length;

  for (let index = 1; index <= nStars; index += 1) {
    console.log(generateRow(charsNeeded, index));
  }
}

function generateRow(total, row) {
  let result = '';
  for (let index = 1; index <= row; index += 1) {
    result += String(index);
  }

  while (result.length < total) {
    result += '*';
  }

  return result;
}

generatePattern(20);
function isPrime(number) {
  if (number === 1 || number === 0) {
    return false;
  }

  let result = true;
  let max_factor = number / 2;
  for (let index = 2; index <= max_factor; index += 1) {
    if (number % index === 0) {
      result = false;
      break;
    }
  }

  return result;
}

function checkGoldbach(expectedSum) {
  if ((expectedSum < 4) || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  for (let index = 2; index <= expectedSum / 2; index += 2) {
    if (isPrime(index)) {
      let difference = expectedSum - index;

      if (isPrime(difference)) {
        console.log(index, difference);
      }

      if (index === 2) {
        index -= 1;
      }
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
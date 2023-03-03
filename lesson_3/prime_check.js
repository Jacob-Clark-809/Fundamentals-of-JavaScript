function isPrime(number) {
  if (number === 1 || number === 0) {
    console.log(false);
    return;
  }

  let result = true;
  let max_factor = number / 2;
  for (let index = 2; index <= max_factor; index += 1) {
    if (number % index === 0) {
      result = false;
      break;
    }
  }

  console.log(result);
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false
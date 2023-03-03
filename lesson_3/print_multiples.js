function logMultiples(number) {
  let max = Math.floor(100 / number) * number;
  for (max; max > 0; max -= number) {
    if (max % 2 === 1) console.log(max);
  }
}

logMultiples(17);
logMultiples(21);
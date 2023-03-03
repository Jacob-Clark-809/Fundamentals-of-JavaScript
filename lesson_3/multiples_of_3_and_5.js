function multiplesOfThreeAndFive() {
  for (let currentNumber = 1; currentNumber <= 100; currentNumber += 1) {
    let multipleOfThree = currentNumber % 3 == 0;
    let multipleOfFive = currentNumber % 5 == 0;

    if (multipleOfThree && multipleOfFive) {
      console.log(String(currentNumber) + '!');
    } else if (multipleOfFive || multipleOfThree) {
      console.log(String(currentNumber));
    }
  }
}

multiplesOfThreeAndFive();
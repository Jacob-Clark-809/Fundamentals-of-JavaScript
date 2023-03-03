function fizzbuzz() {
    for (let currentNumber = 1; currentNumber <= 100; currentNumber += 1) {
    let multipleOfThree = currentNumber % 3 == 0;
    let multipleOfFive = currentNumber % 5 == 0;

    if (multipleOfThree && multipleOfFive) {
      console.log('FizzBuzz');
    } else if (multipleOfThree) {
      console.log('Fizz');
    } else if (multipleOfFive) {
      console.log('Buzz');
    } else {
      console.log(currentNumber);
    }
  }
}

fizzbuzz();
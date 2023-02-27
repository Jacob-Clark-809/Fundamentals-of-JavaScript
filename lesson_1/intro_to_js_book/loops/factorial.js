function factorial(number) {
  let result = 1;
  for (number; number > 0; number -= 1) {
    result *= number;
  }

  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
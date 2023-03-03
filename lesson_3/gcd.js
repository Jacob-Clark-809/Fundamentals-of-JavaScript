function gcd(num1, num2) {
  let small = num1 <= num2 ? num1 : num2;
  let big = num1 > num2 ? num1 : num2;

  for (let index = small; index > 0; index -= 1) {
    if ((big % index === 0) && (small % index === 0)) {
      return index;
    }
  }

  return 'Something went wrong.';
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));

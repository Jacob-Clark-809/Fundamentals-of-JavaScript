function evenOrOdd(a) {
  if (!Number.isInteger(a)) {
    console.log("That is not a valid integer.")
  } else if (a % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd(5);
evenOrOdd(10);
evenOrOdd(3);
evenOrOdd("hello there");
function matrixSums(arr) {
  let sums = [];
  arr.forEach(function(value) {
    let sum = value.reduce(
      (acc, value) => acc + value
    );
    sums.push(sum);
  });

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
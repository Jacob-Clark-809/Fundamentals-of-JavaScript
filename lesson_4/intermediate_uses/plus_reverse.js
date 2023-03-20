function plusReverse(arr) {
  let result = arr.concat(arr.slice().reverse());
  return result;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(plusReverse(digits));  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]
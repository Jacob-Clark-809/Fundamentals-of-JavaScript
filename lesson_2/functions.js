function average(values) {
  return sum(values) / values.length;
}

function sum(values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }

  return total;
}

let temperatures = [73, 58, 81, 64, 67];
console.log(average(temperatures));
function random(min, max) {
  let diff = Math.abs(min - max);
  let rand = Math.round(diff * Math.random());

  if (min < max) {
    return min + rand;
  } else {
    return max + rand;
  }
}

console.log(random(1, 5));
console.log(random(10, 20));
console.log(random(0, 100));
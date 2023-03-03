let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

/*
This outpus: 50, 60, 15.

This is because the parameter increment for incrementBy() is not the same as
the global increment on line 2 so passing in the value 10 has no affect on
the value of the global. Also the parameter increment shadows the global
increment as an argument on line 5 so we add 10 to total and not 15.
*/
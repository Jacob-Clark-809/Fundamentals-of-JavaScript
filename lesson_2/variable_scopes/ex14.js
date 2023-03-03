let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);

/*
The above code will output 'hello'.

This is because variables declared with let as on line 4 have block scope, so
the for loop a is not the same as the a from line 1 - it shadows it. Therfore
line 4 does not change the global a from line 1 and 'hello' is output on line
7.
*/
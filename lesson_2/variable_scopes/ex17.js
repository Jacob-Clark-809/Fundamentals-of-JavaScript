let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

/*
This outputs 'outer', 'outer', 'outer', 'inner'.
a and b are output as initialized on line 4 and line 5.

setScope() does not alter the value of a as this is passed in as an argument
and the parameter foo which is assigned the value of a is a local variable so
does not alter the gloabl a on line 1. The global b however is changed to a
value of 'inner' on line 12.
*/
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo());
console.log(a);

/*
Line 13 outputs 4 simply because this is the return value of foo() because
it is the return value of bar() as seen on lin 7.

Line 14 outputs 3 because calling foo() on line 13 sets a to 2 on line 4 and
then a to 3 when bar() is called on line 10. The a in the function refers
to the global variable a declared on line 1.
*/
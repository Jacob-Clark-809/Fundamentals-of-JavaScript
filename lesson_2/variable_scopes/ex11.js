function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

/*
This code will output 'hello' and then throw a Reference error.

After hoisting the hello() method will declare the variable a at the start
of the function using the var keyword. This gives the variable function scope
and an initial value of undefined. On line 2 the value is reassigned to 'hello'.
This is then output on line 3.

Line 11 will not have access to a because it is only available in the function,
as stated it has funciton scope.
*/
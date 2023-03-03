let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/*
The above code will output: 'outer', 'inner', 'outer'.
On line 1 we declare the variable a and initialize it with a value of 'outer'.
We have used the let command which gives the variable block scope but since
this declaration occurs in the outer most part of the program we can say
that a has global scope, i.e. it can be accessed anywhere in the program.
Therefore, when line 8 runs it is this variable that is accessed and 'outer'
is output.

Line 9 calls the function testScope defined on line 3 to line 6. On line 4
we declare and initialize a new variable a which shadows the variable declared
on line 1. Therefore, when line 5 runs it is the line 4 variable that is
accessed and 'inner' is output.

Line 10 works the same as line 8. In the global scope we do not have access
to the variable declared in the function as that variable has local scope
so it is the line 1 variable that is output.
*/
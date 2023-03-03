let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/*
On line 8 a is the global variable declared on line 1 so this outputs 'outer'.
The functions is then called on line 9 and line 4 of that function
reassigns the value of the global variable a to 'inner'. This is then output
on line 5.
Finally, on line 10 a is output again with its new value of 'inner'.

Solution: 'outer', 'inner', 'inner'.
*/
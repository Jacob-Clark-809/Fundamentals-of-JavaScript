var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);

/*
Since var has function scope after hoisting the var declaration on line 4
is moved to the top of the program. This means the variable declared on line 1
coincides with the one in the block, no shadowing occurs and the global
variable a is changed and 4 is output on line 7.
*/
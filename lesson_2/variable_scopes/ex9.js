function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

/*
This code will output undefined to the console. This is because variables
defined with var have function scope so a is accessible on line 6. However,
since the if statement never runs its value is set to undefined.
*/
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);

/*
This will output 'hello' twice.

This is because line 2 declares and initializes a global variable a with
value 'hello'. This is output on line 3 and line 11.

The variable a on line 6 is a local variable that shadows the global a.
*/
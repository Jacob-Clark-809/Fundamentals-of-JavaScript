function hello() {
  let a = 'hello';
}

hello();
console.log(a);

/*
This will give an undefined variable error as the a on line 2 is local to
the function and so is unavailable on line 6.
*/
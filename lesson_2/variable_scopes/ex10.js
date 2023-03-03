function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();

/*
The above code will throw a Reference error. This is beacuase variables
declared with let have block scope so a is not accessible on line 6.
*/
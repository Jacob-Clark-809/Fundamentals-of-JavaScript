console.log(a);

function hello() {
  a = 1;
}

/*
This gives an undefined variabel error because the code in hello() has never
been run so the global variable a does not exist yet.
*/

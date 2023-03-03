let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};

/*
This outputs 'outer' and then throws a type error because setScope is not
yet a function.

Because of hoisting setScope gets set to undefined at the start of the
program and this does not change until it is reassigend on line 7 which
happens after the attempted function call on line 4.
*/
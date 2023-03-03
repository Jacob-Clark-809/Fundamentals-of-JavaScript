bar();
var foo = 'hello';

function bar() {
  console.log(foo);
}

/* This is equivalent to:
function bar() {
  console.log(foo)
}

var foo;

bar();
foo = 'hello';
*/

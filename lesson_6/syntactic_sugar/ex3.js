/*
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let { baz, qux, bar } = foo(1, 2, 3);
*/

// We can rewrite the above as:

function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let temp = foo(1, 2, 3);
let baz = temp.baz;
let qux = temp.qux;
let bar = temp.bar;

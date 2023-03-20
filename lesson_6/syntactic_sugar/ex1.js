/*
function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}
*/

// We can rewrite the above shorthand as:

function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}

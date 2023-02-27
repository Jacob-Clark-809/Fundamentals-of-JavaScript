function foo(bar) {
  console.log(bar, bar, bar);
}

foo("hello"); // should print "hello hello hello"
let bar = foo;
bar("hi");    // should print "hi hi hi"
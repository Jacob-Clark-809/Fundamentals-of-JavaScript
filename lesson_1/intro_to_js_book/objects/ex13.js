function foo(bar) {
  console.log(bar());
}

foo(_ => 'Welcome');    // Should print 'Welcome'
foo(_ => 3.1415);    // Should print 3.1415
foo(_ => [1, 2, 3]);    // Should print [1, 2, 3]
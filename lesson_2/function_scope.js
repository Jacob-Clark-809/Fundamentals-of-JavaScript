function test() {
  console.log(typeof test2);

  if (false) {
    function test2() {

    }
  }
}

test();
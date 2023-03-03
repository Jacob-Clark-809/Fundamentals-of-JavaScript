var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);

/*
This code outputs: 'superNested', 'global'.

This is beause checkScope() returns the return value of nested() which returns
the return value of superNested() which returns a which is set to 'superNested'
on line 8.

All the a variables in checkScope() are local variables which shadow the global
a on line 1 so the value of the global a is not changed and line 19 outputs
'global'.
*/
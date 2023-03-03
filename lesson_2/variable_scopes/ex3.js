let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

/*
Solution: 'empty', 'play station', 'computer'.
Line 8 outputs the basket global variable set on line 1 to 'empty'.
On line 19 the shop() function is called which reassigns the value of basket
to 'tv'. This is then reassigned againt to 'computer' when shop2() is called.

shop3() defines a local variable basket which shadows the other basket and
sets this local variable to 'play stations'. This is output on line 16.

The value of the global basket is ouptu on line 23 which has value 'computer'.
*/
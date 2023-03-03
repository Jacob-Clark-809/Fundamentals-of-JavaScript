let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);

/*
On line 10 we set the value of the variable newColors to be the return
value of the method updateColors(). On this call of the method the colors
parameter references the same array as the colors global variable and the
color parameter holds the string value 'purple'. The function mutates the
array by appending 'purple' to it and the returns that same array. newColors
and colors reference the same array after line 10.

We then run updateColors() again on line 11 and the colors parameter again
references the same array as colors and newColors. This array is mutated
by appending the value 'pink'.

Therefore, the output is ['red', 'green', 'blue', 'purple', 'pink']
*/
let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

/*
Line 14 calls removeColor() passing in a reference to the array colors which
gets assigned to the parameter colors in the function. On line 10 we set the
value of the global color to the return value of colors.pop() which is 'blue'.
This also mutates the array referenced by gloabal colors and parameter colors.
We then return a reference to the colors array which is assigned to newColors
on line 14.

We then call addColor() and pass in a reference to the colors array (which is
also pointed to by newColors) and assing it to the parameter colors. The color
parameter takes the value 'blue' as this was the value of global color. This
value is then appended to the array using a mutating method. Therefore,
newColors and colors gloabl variable now both point to the same array with
values ['red', 'green', 'blue'].

Hence, the output is ['red', 'green', 'blue'].
*/
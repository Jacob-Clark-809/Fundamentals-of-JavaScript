let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);

/*
This will output: ['red', 'green', 'blue', undefined]

This is because the color parameter on line 4 shadows, or blocks access to
the global color on line 1. Since only one argument is passed into the
function on line 8 the value of the local color variable is set to undefined
and this is what we push to the array.

The global array is modified because the colors parameter and global variable
point to the same array and we use a mutating method on that array.
*/
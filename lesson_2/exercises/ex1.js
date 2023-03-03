let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);

/*
This will output: ['red', 'green', 'blue', 'yellow']

This is because push() is a mutating method the color on line 5 references
the color global variable defined on line 1.
*/
function allCaps(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(allCaps("hello there"));
console.log(allCaps("notme"));
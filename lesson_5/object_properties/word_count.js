function wordCount(string) {
  let result = {};
  let words = string.split(' ');
  words.forEach((word) => incrementProperty(result, word));

  return result;
}

function incrementProperty(object, property) {
  if (objectHasProperty(object, property)) {
    object[property] += 1;
  } else {
    object[property] = 1;
  }

  return object[property];
}

function objectHasProperty(object, property) {
  let keys = Object.keys(object);
  return keys.includes(property);
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
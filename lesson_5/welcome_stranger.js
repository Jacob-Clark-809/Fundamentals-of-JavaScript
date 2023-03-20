function greetings(allNames, position) {
  let name = allNames.join(' ');
  let job = position.title + ' ' + position.occupation;

  console.log(`Hello, ${name}! Nice to have a ${job} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

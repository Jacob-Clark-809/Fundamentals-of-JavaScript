function dateSuffix(date) {
  date = String(date);
  let suffix;
  let end = date[date.length - 1];

  if (date.length !== 1 && date[0] === '1') {
    return date + 'th';
  }

  switch (end) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }

  return date + suffix;
}

function formattedDate(date) {
  let day = formattedDay(date);
  let calendarDate = formattedCalendarDate(date);
  let month = formattedMonth(date);
  let message = `Today's date is ${day}, the ${calendarDate} of ${month}.`;

  console.log(message);
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedCalendarDate(date) {
  return dateSuffix(date.getDate());
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[today.getMonth()];

}

let today = new Date();
formattedDate(today);

console.log(today.getFullYear());
console.log(today.getYear()); // deprecated

console.log(today.getTime());

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());
console.log(today === nextWeek);
console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);
formattedDate(nextWeek);
console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(date) {
  let minutes = String(date.getMinutes());
  let hours = String(date.getHours());

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  if (hours.length === 1) {
    hours = '0' + hours;
  }

  return hours + ':' + minutes;
}

console.log(formatTime(today));
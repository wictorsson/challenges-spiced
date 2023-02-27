console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here

  let time = new Date().getHours();
  if (time < 6) {
    return "Good night";
  } else {
    if (time < 13) {
      return "Good morning";
    }
    if (time < 18) {
      return "Good afternoon";
    }
    if (time < 22) {
      return "Good evening";
    }
    return "Good night";
  }
}

function getDayColor() {
  // Code here
  let dayOfTheWeek = new Date().getDay();

  if (dayOfTheWeek == "1") {
    return "darkgray";
  }
  if (dayOfTheWeek >= "2" && dayOfTheWeek < "6") {
    return "lightblue";
  }
  return "hotpink";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();

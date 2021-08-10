console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 1; i <= count; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
do {
  var userNumber = prompt("Please enter a number", 100);
} while (userNumber <= 0);
printOdds(userNumber);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age = 18, name = "John Doe") {
  let aboveSixteen = `Congrats ${name}, you can drive!`;
  let belowSixteen = `Sorry ${name}, you are not sixteen`;
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}
do {
  var userAge = prompt("Please enter a age", 18);
} while (userAge <= 0);
checkAge(21, "John Doe");

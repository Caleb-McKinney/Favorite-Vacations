"use strict";
// Using Javascript to allow users to interact with the information on my page

// string
let greeting = "Welcome to Galway";

// boolean
// truth or false
let trueBoolean = true;
let falseBoolean = false;

console.log(greeting);

let favoriteVacation = prompt("where is your favorite vacation spot?");
console.log(favoriteVacation);


// if(this equals true){then do this}
if (favoriteVacation == "Galway") {
  alert("That's cool!");
} else if (favoriteVacation == "Asheville") {
  alert("Good Enough");
} else {
  alert("Wrong answer " + favoriteVacation);
}
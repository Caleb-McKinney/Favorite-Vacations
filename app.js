"use strict";
// Using Javascript to allow users to interact with the information on my page

// string
let greeting = "Welcome to Galway";
console.log(greeting);

function displayUsername(){
  let username = prompt("What is your name?");
  document.write(username)
}

function displayLocation(){
  let favoriteVacation = prompt("Where is your favorite vacation spot?");
  console.log(favoriteVacation)
  document.write(favoriteVacation)
  // document.write(favoriteVacation)
}
//The line below this can put user input on html page
// document.write(displayLocation())
// console.log(favoriteVacation);


// if(this equals true){then do this}
// if (favoriteVacation == "Galway") {
//   alert("That's cool!");
// } else if (favoriteVacation == "Asheville") {
//   alert("Good Enough");
// } else {
//   alert("Wrong answer " + favoriteVacation);
// }

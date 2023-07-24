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

function userGuess(){  
  let userTry = prompt("Pick a number between 1-100");
  let attempts = 5;
  let correctAnswer = 45;
  
  while (attempts > 0) {
    if (userGuess == correctAnswer) {
      alert(correctAnswer + "That's Correct!");
      break;
    } else {
      userGuess = prompt ("Please Try Again");
      attempts--;
    }
  }
}
  

function add2Numbers(num1, num2){
  let sum = num1 + num2
  
  return sum 
}

let fourPlusNine = add2Numbers(4, 9)

console.log(fourPlusNine)
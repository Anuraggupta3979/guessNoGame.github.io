"use strict";

// document.querySelector(".message").textContent = "fhghgf";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 25;

// document.querySelector(".guess").value = 29;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(typeof secretNumber);
let score = 20;
let highs = 0;
let highs2;
// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (!guess) {
    // document.querySelector(".message").textContent = "ð¨ No number";
    displayMessage("ð¨ No number!Please enter a Number..");
  } else if (guess == secretNumber) {
    let highs2 = score;
    if (highs2 > highs) {
      highs = highs2;
    }
    document.querySelector(".highscore").textContent = highs;
    // document.querySelector(".message").textContent = "ð Correct Number"
    displayMessage("ð Correct Number");
    document.querySelector(".headingh1").textContent = "ðððð¥YOU WIN!!!!!!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(135, 236, 135)";
    // document.querySelector(".number").style.width = "25rem";
  } else if (guess != secretNumber) {
    if (score > 1) {
      score = score - 1;
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "ð¥ Too High" : "ð¥ Too Low";
      displayMessage(guess > secretNumber ? "ð¥ Too High" : "ð¥ Too Low");
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "ð­ð­ You Lost The Game";
      displayMessage("ð­ð­ You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }

  ////*********repetation code /long code *****sort code if else statement upperð */
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score = score - 1;
  //     document.querySelector(".message").textContent = "ð¥ Too High";
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "ð­ð­ You Lost The Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score = score - 1;
  //     document.querySelector(".message").textContent = "ð¥ Too Low";
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "ð­ð­ You Lost The Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  // document.querySelector(".message").textContent = "ðStart Guessing...";
  displayMessage("ðStart Guessing...");
  document.querySelector("body").style.backgroundColor = "rgb(122, 240, 220)";
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".headingh1").textContent = "Guess My Number !";

  document.querySelector(".guess").value = "";
});

"use strict";

// var is hoisted and initialized with undefined.
console.log("Score:", score);

// Function declarations are hoisted completely.
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

// let is initialized before startGame() is called.
let status = "ready";

function startGame() {
    console.log("Status:", status);
}

startGame();

console.log("\n----- Arrow Function Example -----");

// Arrow functions are not available before initialization.
const showMessage = () => {
    console.log("Arrow function started");
};

showMessage();
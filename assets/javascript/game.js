//computer will select number between 19 and 120 for the player to match
var randomNumber= 19 + Math.floor(Math.random() * 120);

$("#numberToGuess").html(randomNumber);
console.log(randomNumber);

//selecting number between 1-12 for the gems

var rainbowGem = 1 + Math.floor(Math.random() * 12);
var blueGem = 1 + Math.floor(Math.random() * 12);
var whiteGem = 1 + Math.floor(Math.random() * 12);
var yellowGem = 1 + Math.floor(Math.random() * 12);

var wins = 0;
var losses = 0;
var total = 0;

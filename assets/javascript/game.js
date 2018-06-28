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

$("#losses").html(losses);
$("#wins").html(wins);
$("#totalNumber").html(total);


//this should reselt variables when game is done

var reset = function (){
    total = 0;
    randomNumber= 19 + Math.floor(Math.random() * 120);
    rainbowGem = 1 + Math.floor(Math.random() * 12);
    blueGem = 1 + Math.floor(Math.random() * 12);
    whiteGem = 1 + Math.floor(Math.random() * 12);
    yellowGem = 1 + Math.floor(Math.random() * 12);
    $("#losses").html(losses);
    $("#wins").html(wins);
    $("#totalNumber").html(total);


}


var winning = function(){
    if (total == randomNumber){
        wins++;
        alert("Woo! You're a winner!")
        $("#wins").html(wins);
        reset();
    
    } else if (total > randomNumber){
        losses++;
        alert("Aw Shucks, you didn't win. Try Again!");
        $("#losses").html(losses);
        reset();
    }
};

//adding number to total score when gem is clicked on

$("#rainbow").on("click",function(){
    total = total + rainbowGem;
    $("#totalNumber").html(total);
    winning();
})

$("#blue").on("click", function(){
    total = total + blueGem;
    $("#totalNumber").html(total);
    winning();

})

$("#yellow").on("click", function (){
    total = total + yellowGem;
    $("#totalNumber").html(total);
    winning();
})

$("#white").on("clilck", function(){
    total = total + whiteGem;
    $("#totalNumber").html(total);
    winning();
})
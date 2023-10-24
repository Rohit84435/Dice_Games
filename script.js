// Dice 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice = "dice" + randomNumber1 + ".png";
var setImage = "images/" + randomDice;
console.log(setImage);
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src",setImage);

// Dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1
var randomDice1 = "dice" + randomNumber2 + ".png";
var setImage1 = "images/" + randomDice1;
console.log(setImage1);
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",setImage1);

var result = document.querySelector("h1");
if(randomNumber1 == randomNumber2){
    result.innerHTML = "Draw!!!";
}
else if(randomNumber1 > randomNumber2){
    result.innerHTML = "Winner is Player 1 ";
}
else{
    result.innerHTML = "Winner is Player 2 "
}
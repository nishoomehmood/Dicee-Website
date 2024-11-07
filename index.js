var randomNumber1 = Math.floor(Math.random()*6)+1; //random number form 1 to 6 

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1; //random number form 1 to 6 

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


//if player wins what message pop up 

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🏳️ PLayer 1 Wins!";
    document.querySelector("h1").style.fontSize = "5rem"; 
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "PLayer 2 Wins! 🏳️";
    document.querySelector("h1").style.fontSize = "5rem"; 
}
else{
    document.querySelector("h1").innerHTML = "🏳️ DRAW! 🏳️";
}
// For Dice 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // => 1 - 6
let randomDiceImg1 = "dice"  + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImg1;
let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// For Dice 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "images/dice"  + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImg2);


//Winner Name

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "📍Draw! Between the players";
}
else {
    document.querySelector("h1").innerHTML = "🏆Players 2 wins!"; 
}
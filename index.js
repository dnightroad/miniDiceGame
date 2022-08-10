
var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomNumber2 = Math.floor((Math.random()*6)+1);

document.querySelector(".img1").src="images/dice" + randomNumber1 + ".png";
document.querySelector(".img2").src="images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="<img src='https://www.pngkey.com/png/full/35-356907_green-flag-clipart.png'> Player 1 wins";
}
else if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="It's a tie!";
}
else{
  document.querySelector("h1").innerHTML="<img src='https://www.pngkey.com/png/full/35-356907_green-flag-clipart.png'> Player 2 wins";
}

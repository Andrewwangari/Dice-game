let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomImage;

let Image1 = document.querySelectorAll("img")[0];
 
Image1.setAttribute("src", randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let Image2 = document.querySelectorAll("img")[1];

Image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {

document.querySelector("h1").innerHTML = "Player 1 Wins"

}
else if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


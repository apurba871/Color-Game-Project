var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; ++i) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            changeColors(clickedColor);
            messageDisplay.textContent = "Correct!";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; ++i) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; ++i) {
        //get random color and push into arr
        arr[i] = getRandomColor();
    }
    //return that array
    return arr;
}

function getRandomColor() {
    //pick red from 0 to 255
    var red = Math.floor(Math.random() * 256);
    //pick green from 0 to 255
    var green = Math.floor(Math.random() * 256);
    //pick blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    //make rgb string
    var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

    return rgb;
}
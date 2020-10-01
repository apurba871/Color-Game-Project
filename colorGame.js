var colors = generateRandomColors(6); //hard by default
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var btmSquares = document.querySelector("#bottom-squares");
var flag = false;

hardbtn.classList.add("difficulty");
hardbtn.disabled = true;

easybtn.addEventListener("click", function() {
    easybtn.classList.add("difficulty");
    hardbtn.classList.remove("difficulty");
    btmSquares.classList.add("hide");
    flag = true;
    resetButton.click();
    pickedColor = pickColor();
    easybtn.disabled = true;
    hardbtn.disabled = false;
});

hardbtn.addEventListener("click", function() {
    easybtn.classList.remove("difficulty");
    hardbtn.classList.add("difficulty");
    btmSquares.classList.remove("hide");
    flag = false;
    resetButton.click();
    easybtn.disabled = false;
    hardbtn.disabled = true;
});

resetButton.addEventListener("click", function() {
    //Change text to 'New Colors'
    resetButton.textContent = "New Colors";
    //generate all new colors of selected difficulty
    if (!flag)
        colors = generateRandomColors(6);
    else
        colors = generateRandomColors(3);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; ++i) {
        squares[i].style.background = colors[i];
    }
    //reset heading color to default
    h1.style.backgroundColor = "#232323";
    //change message to nothing
    messageDisplay.textContent = "";
    //paint squares
    paintSquares();
});

colorDisplay.textContent = pickedColor;
paintSquares();

function paintSquares() {
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
                resetButton.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; ++i) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    console.log(colors.length);
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
    //return rgb string
    return rgb;
}
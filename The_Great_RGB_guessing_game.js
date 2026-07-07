let resetButton = document.querySelector("#reset");
let squareColor = ["rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"];
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = squareColor[i];
}


function changeColors() {
    //loop through all squares
    for (let i = 0; i < squareColor.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = squareColor[i];
    }
}

function winningColor(finalColor) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = finalColor;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * squareColor.length);
    return squareColor[random];
}

function generateRandomColors() {
    //make an array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < squareColor.length; i++) {
        arr.push(randomColor());
        //get random color and push into arr
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}



setUpSquares();
function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked squares
            clickedColor = this.style.backgroundColor;
            //compare color to picked color 
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = " ";
                resetButton.textContent = "Play Again?";
                winningColor(pickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

resetButton.addEventListener("click", reset);

function reset() {
    //generate all new colors and pick a new secret color from them
    squareColor = generateRandomColors();
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    messageDisplay.textContent = " ";
    resetButton.textContent = "New Colors";
    h1.style.background = "steelblue";
    changeColors();
}
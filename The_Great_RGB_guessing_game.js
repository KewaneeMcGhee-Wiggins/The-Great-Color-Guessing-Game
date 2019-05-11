let resetButton = document.querySelector("#reset");
let squareColor = ["rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"];
let squares = document.querySelectorAll(".square");
// let test = document.getElementsByClassName("square");
let pickedColor = pickColor();
console.log(pickedColor);
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");


// squareColor = generateRandomColors();
// pickedColor = pickColor();
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
    // square.addEventListener("click", square);{
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

function reset(squares) {

/*
       Set the colors array equal to the generateRandomColors function
       Set the secret-color variable to a random value, as in Step #25
       Display the new secret color inside the h1 on the document
       Remove the "Correct" text from the message span
       Change the background of the h1 back to its original color
       Display all the new colors on the document
   */
    //generate all new colors
    squares = generateRandomColors();
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    messageDisplay.textContent = " ";
    h1.style.background = "steelblue";
    changeColors();
    //pick new random color from array
    //pickedColor = pickColor("rgb(0, 255, 0)");
    //change colorDisplay to match picked color
    // colorDisplay.textContent = pickedColor;
    // resetButton.textContent = "New Colors";
    // messageDisplay.textContent = "";
    //change colors of squares
    // for (let i = 0; i < squares.length; i++) {
    //     if (squareColors[i]) {
    //         square[i].style.display = "block";
    //         square[i].style.background = colors[i];
    //     } else {
    //         square[i].style.display = "none";
    //     }
    //     function getRandomInt(min, max) {
    //         return Math.floor(Math.random() * (max - min + 1)) + min;
    //         document.getElementById("square").innerHTML = pickedColor;
    //     }
    // }
}


// hardBtn.addEventListener("click", hardBtn);
// hardBtn.classList.add("selected");
// classList.remove("selected");
// numSquares = 6;
// resetButton.addEventListener("click", reset); {
//     reset(generateRandomColors);
// };

// let modeButtons = document.querySelectorAll(".mode");
//let numSquares = 6;
// let btn = document.querySelector('button');
// let easyBtn;
// btn.addEventListener("click", easyBtn); 
//  let hardBtn;
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
// numSquares = 3;
// let generateRandomColors;
// let init= "messageDisplay";
// function init() {
    //mode buttons even listeners
    // setUpModeButtons();
    // setUpSquares();
    // reset();
// }
// function setUpModeButtons() {
    // for (var i = 0; i < modeButtons.length; i++) {
    //     modeButtons[i].addEventListener("click", setUpModeButtons); {
    //         modeButtons[0].classList.remove("selected");
    //         modeButtons[1].classList.remove("selected");
    //         this.classList.add("selected");
    //         this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

    //         reset();

    //     };
//     }
// }


const sizeSlide = document.getElementById("sizeSlide");
const container = document.getElementById("container");
const grid = document.getElementsByClassName("grid");
const colorPicker = document.getElementById("color");
let color = "#ff0000";
const clearButton = document.getElementById("clear");
const rainbowButton = document.getElementById("rainbowMode");
const borderButton = document.getElementById("border");
const eraser = document.getElementById("eraser");
const colorModeButton = document.getElementById("colorMode");


// color Picker
colorPicker.addEventListener("input", function(event){
    color = event.target.value;
    setColor();
    });

function setColor() { 
for (let i = 0; i < grid.length; i++){
    grid[i].addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = color; 
    })}};

// clear button
clearButton.addEventListener("click", function(){
    for (let i = 0; i < grid.length; i++){
        grid[i].style.backgroundColor = "white";
    }
});

//Rainbow Button
rainbowButton.addEventListener("click", function(){
    if (rainbowButton.style.backgroundColor == "green"){
        rainbowButton.style.backgroundColor = "";
        setColor();
    }
    else {
        rainbowButton.style.backgroundColor = "green";
        eraser.style.backgroundColor = "";
        setColorRainbow();
    }});

function setColorRainbow() { 
    for (let i = 0; i < grid.length; i++){
        grid[i].addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = getRandomColor(); 
        })}};

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor
}
// Border button
borderButton.addEventListener("click", function(){
    if (borderButton.style.backgroundColor == "green"){
        borderButton.style.backgroundColor = "";
        for (let i = 0; i < grid.length; i++){
            grid[i].style.border = "0px solid white";
        }
    } 
    else {
        borderButton.style.backgroundColor = "green";
        
        for (let i = 0; i < grid.length; i++){
            grid[i].style.border = "1px solid white";
        }

}});

// Eraser Button
eraser.addEventListener("click", function (){
    if (eraser.style.backgroundColor == "green"){
        eraser.style.backgroundColor = "";
        setColor();
    }
    else {
        eraser.style.backgroundColor = "green";
        rainbowButton.style.backgroundColor = "";
        setColorEraser();
    }
});

function setColorEraser() { 
    for (let i = 0; i < grid.length; i++){
        grid[i].addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "white";
        })}};

// Color Mode 
colorModeButton.addEventListener("click", function() {
    eraser.style.backgroundColor = "";
    rainbowButton.style.backgroundColor = "";
    setColor();
})




sizeSlide.addEventListener("change", function(){
    container.innerHTML = ""; //delete pervious Grid
    container.style.gridTemplateColumns = `repeat(${sizeSlide.value}, auto)`; // create rows/columns
    container.style.gridTemplateRows = `repeat(${sizeSlide.value}, auto)`;
    createDivs (sizeSlide.value, sizeSlide.value);  // create grid
    document.getElementById("sizeSlideValue").textContent = sizeSlide.value;
    setColor();
    borderButton.click(); // reset borders for new amount of divs
    borderButton.click();
});


function createDivs (row, column){
for (let r = 0; r < row ; r++){
    for (let c = 0; c < column; c++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "grid"); 
        const newContent = document.createTextNode("");
        newDiv.appendChild(newContent);
        document.getElementById("container").appendChild(newDiv);
    }}};

createDivs(16, 16);
setColor();
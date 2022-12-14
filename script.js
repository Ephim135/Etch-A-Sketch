function createDivs (){
for (let row = 0; row < 16 ; row++){
    for (let column = 0; column < 16; column++){
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode("1");
        newDiv.appendChild(newContent);
        document.getElementById("container").appendChild(newDiv);
    }}};

function createDiv (){

    const newDiv = document.createElement("div");

    document.getElementById("container").appendChild(newDiv);
}

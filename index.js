const container = document.querySelector("#container");
const resetButtonNode = document.querySelector("#reset-button");
const resizeButtonNode = document.querySelector("#resize-button");

let width = 16;
let height = 16; 
let drawState = false;

const clearBox = () => {
    drawBox(width, height);
}

const drawBox = (width, height) => {
    container.innerHTML = "";

    const COLUMNS = width;
    const ROWS = height;
    
    for (let col = 0; col < COLUMNS; col++){
        const COLUMN_NODE = document.createElement("div");
        COLUMN_NODE.classList.add("column")
        for (let row = 0; row < ROWS; row++){
            const ROW_NODE = document.createElement("div");
            ROW_NODE.classList.add("row"); 
            ROW_NODE.addEventListener("mouseover", elementClicked);
            COLUMN_NODE.appendChild(ROW_NODE);
        }
        container.appendChild(COLUMN_NODE);
    }
} 

const elementClicked = (e) => {
    if(drawState)
        e.target.classList.add("filled");
}

const resizeButtonClicked = () => {
    do{
        width = prompt("How many tiles wide? (Provide integer value 0 < x <= 100)");
    } while(parseInt(width) <= 0 || parseInt(width) > 100 || !parseInt(width));

    do{
        height = prompt("How many tiles high? (Provide integer value 0 < x <= 100)");
    } while(parseInt(height) <= 0 || parseInt(height) > 100 || !parseInt(height));
    drawBox(width, height);
}

resetButtonNode.addEventListener("click", clearBox);
resizeButtonNode.addEventListener("click", resizeButtonClicked);
container.addEventListener("mousedown", function(e) {
    e.preventDefault();
    if(e.button===0)
        drawState = true;
    console.log(drawState);
});

container.addEventListener("mouseup", function(e) {
    e.preventDefault();
    if(e.button===0)
        drawState = false;
});

drawBox(16, 16);
const container = document.querySelector(".container");

const elementClicked = (e) => {
    console.log(e.target);
}

const COLUMNS = 16;
const ROWS = 16;

for (let col = 0; col < COLUMNS; col++){
    const COLUMN_NODE = document.createElement("div");
    COLUMN_NODE.classList.add("column")
    for (let row = 0; row < ROWS; row++){
        const ROW_NODE = document.createElement("div");
        ROW_NODE.classList.add("row"); 
        ROW_NODE.addEventListener("click", elementClicked);
        COLUMN_NODE.appendChild(ROW_NODE);
    }
    container.appendChild(COLUMN_NODE);
}
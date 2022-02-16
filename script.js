const grids = document.querySelector('.grids');

function createGrid(rows, cols) {
    rows = prompt("Number of rows. Number can be larger then 100.");
    cols = prompt("Number of columns. Number can be larger then 100.");
    grids.style.setProperty('--rows', rows);
    grids.style.setProperty('--cols', cols);
    for(let i = 0; i < (rows*cols); i++){
        let cell = document.createElement("div");
        cell.classList.add("toGrids");
        grids.appendChild(cell);
    }
    if(rows > 100 && cols > 100) {
        location.reload()
    }
}

createGrid()


let color = ["#ff0000", "#ff4000", "#ff8000", "#ffbf00", "#000000", "#80ff00", "#00ff40", "#00ffff", "#0000ff", "#8000ff", 
            "#ffd700", "#4b082", "#fffff0", "#d2691e", "#800000"];
let cells = document.querySelectorAll(".toGrids");
cells.forEach(CC => CC.addEventListener("mouseover", () => {
    rColor(CC)
}))

const rColor = (CC) => {
    CC.style.background = color[Math.floor(Math.random() * color.length)];
}


const btnC = document.querySelector("#btnC");
btnC.addEventListener("click", () => {
    location.reload()
})
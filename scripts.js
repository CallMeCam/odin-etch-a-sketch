// create grid of divs
const gridContainer = document.getElementById('grid-container');

function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        // cell.innerText = (c + 1);
        gridContainer.appendChild(cell).className = 'grid-item';
    };

    applyHoverEffect(getCells());
};

makeRows(16, 16);

// apply hover effect to grid cells
function applyHoverEffect(cells) {
    cells.forEach(cell => cell.addEventListener('mouseenter', function () {
        cell.style.backgroundColor = "pink";
        cell.style.transition = "background-color 0.3s";
    }));
};

// reset button logic
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function () {
    let cells = getCells();

    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
        cell.style.transition = "background-color 0.3s";
    });
});

// clear grid
function clearGrid(cells) {
    cells.forEach(cell => cell.remove());
}

// get cells from document
function getCells() {
    const gridCells = document.getElementsByClassName('grid-item');
    return [...gridCells];
};


// proompt for size
const gridSizeButton = document.getElementById('grid-size');

gridSizeButton.addEventListener('click', function () {
    let gridSize = prompt("Please enter a grid size:", "16");

    if (gridSize <= 64) {
        clearGrid(getCells());
        makeRows(gridSize, gridSize);
    } else {
        alert("Sorry, the maximum grid size allowed is 64.");
    }
});




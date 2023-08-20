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
};

makeRows(16, 16);

// apply hover effect to grid cells
const gridCells = document.getElementsByClassName('grid-item');
const gridCellsArray = [...gridCells];

gridCellsArray.forEach(cell => cell.addEventListener('mouseenter', function () {
    cell.style.backgroundColor = "pink";
    cell.style.transition = "background-color 0.3s";
}));

// reset button logic
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function () {
    gridCellsArray.forEach(cell => {
        cell.style.backgroundColor = "white";
        cell.style.transition = "background-color 0.3s";
    });
});
var constants = require("../constants");

function drawChessBoard() {
  const chessBoard = [];
  for (let rowIndex = 0; rowIndex < constants.NO_OF_ROWS; rowIndex++) {
    const columnCells = [];
    for (
      let columnIndex = 0;
      columnIndex < constants.NO_OF_COLUMNS;
      columnIndex++
    ) {
      columnCells.push(`${constants.CELL_LETTERS[rowIndex]}${columnIndex + 1}`);
    }
    chessBoard[rowIndex] = columnCells;
  }
  return chessBoard;
}

module.exports = drawChessBoard;

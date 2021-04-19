var constants = require("../constants/chessBoard");

function drawChessBoard() {
  const chessBoard = [];
  for (let rowIndex = 0; rowIndex < constants.ROWS; rowIndex++) {
    const columnCells = [];
    for (let columnIndex = 0; columnIndex < constants.COLUMNS; columnIndex++) {
      columnCells.push(`${constants.LETTERS[rowIndex]}${columnIndex + 1}`);
    }
    chessBoard[rowIndex] = columnCells;
  }
  return chessBoard;
}

module.exports = drawChessBoard;

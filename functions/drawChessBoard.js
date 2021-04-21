var constants = require("../constants/chessBoard");

function drawChessBoard() {
  const chessBoard = new Map();
  for (let rowIndex = 0; rowIndex < constants.ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < constants.COLUMNS; columnIndex++) {
      chessBoard.set(
        `${rowIndex}_${columnIndex}`,
        `${constants.LETTERS[rowIndex]}${columnIndex + 1}`
      );
    }
  }
  return chessBoard;
}

module.exports = drawChessBoard;

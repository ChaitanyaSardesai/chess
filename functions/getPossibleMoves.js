const drawChessBoard = require("./drawChessBoard");
const getCells = require("./getCells");
const getPositions = require("./getPieceWisePositions");

function getPossibleMoves(pieceType, position) {
  const chessBoard = drawChessBoard();
  const indices = getCurrentPositionIndices(
    Array.from(chessBoard.entries()),
    position
  ).split("_");
  const piece = getPieceObject(pieceType, chessBoard, indices[0], indices[1]);
  return piece;
}

function getCurrentPositionIndices(chessBoardArray, position) {
  return chessBoardArray.find((key, value) => {
    return key[1] === position;
  })[0];
}

function getPieceObject(pieceType, chessBoard, rowIndex, columnIndex) {
  switch (pieceType) {
    case "King":
      return getCells(
        chessBoard,
        getPositions.getPositionsForKing(+rowIndex, +columnIndex)
      );
    case "Queen":
      return getCells(
        chessBoard,
        getPositions.getPositionsForQueen(+rowIndex, +columnIndex)
      );
    case "Bishop":
      return getCells(
        chessBoard,
        getPositions.getPositionsForBishop(+rowIndex, +columnIndex)
      );
    case "Horse":
      return getCells(
        chessBoard,
        getPositions.getPositionsForHorse(+rowIndex, +columnIndex)
      );
    case "Rook":
      return getCells(
        chessBoard,
        getPositions.getPositionsForRook(+rowIndex, +columnIndex)
      );
    case "Pawn":
      return getCells(
        chessBoard,
        getPositions.getPositionsForPawn(+rowIndex, +columnIndex)
      );
  }
}

module.exports = getPossibleMoves;

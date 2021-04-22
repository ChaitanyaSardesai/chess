const {
  KING,
  QUEEN,
  BISHOP,
  HORSE,
  ROOK,
  PAWN,
} = require("../../constants/chessBoard");
const composeChessBoardMap = require("../util/composeChessBoardMap");
const getCellIds = require("../util/getCellsIds");
const getPositions = require("./getPieceWisePositions");

function getPossiblePieceMoves(pieceType, position) {
  const chessBoard = composeChessBoardMap();
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
    case KING:
      return getCellIds(
        chessBoard,
        getPositions.getPositionsForKing(+rowIndex, +columnIndex)
      );
    case QUEEN:
      return getCellIds(
        chessBoard,
        getPositions.getPositionsForQueen(+rowIndex, +columnIndex)
      );
    case BISHOP:
      return getCellIds(
        chessBoard,
        getPositions.getPositionsForBishop(+rowIndex, +columnIndex)
      );
    case HORSE:
      return getCellIds(
        chessBoard,
        getPositions.getPositionsForHorse(+rowIndex, +columnIndex)
      );
    case ROOK:
      return getCellIds(
        chessBoard,
        getPositions.getPositionsForRook(+rowIndex, +columnIndex)
      );
    case PAWN:
      return getCellIds(
        chessBoard,
        getPositions.getPositionsForPawn(+rowIndex, +columnIndex)
      );
  }
}

module.exports = getPossiblePieceMoves;

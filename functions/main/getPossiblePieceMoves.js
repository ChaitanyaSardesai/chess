const {
  KING,
  QUEEN,
  BISHOP,
  HORSE,
  ROOK,
  PAWN,
} = require("../../constants/chessBoard");
const composeChessBoardMap = require("../util/composeChessBoardMap");
const getCellIdsString = require("../util/getCellsIdsString");
const getPieceWisePositions = require("./getPieceWisePositions");

function getPossiblePieceMoves(pieceType, position) {
  const chessBoard = composeChessBoardMap();
  const indices = getCurrentPositionIndices(
    Array.from(chessBoard.entries()),
    position.toUpperCase()
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
      return getCellIdsString(
        chessBoard,
        getPieceWisePositions.getPositionsForKing(+rowIndex, +columnIndex)
      );
    case QUEEN:
      return getCellIdsString(
        chessBoard,
        getPieceWisePositions.getPositionsForQueen(+rowIndex, +columnIndex)
      );
    case BISHOP:
      return getCellIdsString(
        chessBoard,
        getPieceWisePositions.getPositionsForBishop(+rowIndex, +columnIndex)
      );
    case HORSE:
      return getCellIdsString(
        chessBoard,
        getPieceWisePositions.getPositionsForHorse(+rowIndex, +columnIndex)
      );
    case ROOK:
      return getCellIdsString(
        chessBoard,
        getPieceWisePositions.getPositionsForRook(+rowIndex, +columnIndex)
      );
    case PAWN:
      return getCellIdsString(
        chessBoard,
        getPieceWisePositions.getPositionsForPawn(+rowIndex, +columnIndex)
      );
    default:
      return "Please check the piece type. The name should start with a capital letter. Ex. King";
  }
}

module.exports = getPossiblePieceMoves;

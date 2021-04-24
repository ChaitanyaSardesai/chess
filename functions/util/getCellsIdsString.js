function getCellIdsString(chessBoard, positions) {
  const cellPositions = positions.map((element) => {
    return chessBoard.get(element.join("_"));
  });
  const result = cellPositions.filter(Boolean).join(", ");
  return result !== ""
    ? result
    : "The chess piece doesn't have any possible moves.";
}

module.exports = getCellIdsString;

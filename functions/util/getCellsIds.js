function getCellIds(chessBoard, positions) {
  const cellPositions = positions.map((element) => {
    return chessBoard.get(element.join("_"));
  });
  return cellPositions.filter(Boolean).join(", ");
}

module.exports = getCellIds;

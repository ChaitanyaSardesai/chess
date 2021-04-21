var getPositions = require("./getDirectionWiseIndices");
var appendIndices = require("./appendIndices");
const { ROWS, COLUMNS } = require("../constants/chessBoard");

function getPositionsForKing(rowIndex, columnIndex) {
  const moves = [];
  moves.push(
    ...appendIndices.appendColumnIndices(
      columnIndex,
      getPositions.getVerticalPositions(rowIndex, 1, 1)
    )
  );
  moves.push(
    ...appendIndices.appendRowIndices(
      rowIndex,
      getPositions.getHorizontalPositions(columnIndex, 1, 1)
    )
  );
  moves.push(
    ...getPositions.getDiagonalPositions(rowIndex, columnIndex, 1, 1, 1, 1)
  );

  return moves;
}

function getPositionsForQueen(rowIndex, columnIndex) {
  const moves = getPositionsForRook(rowIndex, columnIndex);
  moves.push(
    ...getPositions.getDiagonalPositions(rowIndex, columnIndex, -1, -1, -1, -1)
  );

  return moves;
}

function getPositionsForBishop(rowIndex, columnIndex) {
  return getPositions.getDiagonalPositions(
    rowIndex,
    columnIndex,
    -1,
    -1,
    -1,
    -1
  );
}

function getPositionsForHorse(rowIndex, columnIndex) {
  const moves = [];
  let verticalTravel = getPositions.getVerticalPositions(rowIndex, 2, 0);
  moves.push(
    ...appendIndices.appendRowIndices(
      verticalTravel[1],
      getPositions.getHorizontalPositions(columnIndex, 1, 1)
    )
  );
  let downwardTravel = getPositions.getVerticalPositions(rowIndex, 0, 2);
  moves.push(
    ...appendIndices.appendRowIndices(
      downwardTravel[0],
      getPositions.getHorizontalPositions(columnIndex, 1, 1)
    )
  );
  let horizontalTravel = getPositions.getHorizontalPositions(columnIndex, 2, 2);
  moves.push(
    ...appendIndices.appendColumnIndices(
      horizontalTravel[0],
      getPositions.getVerticalPositions(rowIndex, 1, 1)
    )
  );
  moves.push(
    ...appendIndices.appendColumnIndices(
      horizontalTravel[3],
      getPositions.getVerticalPositions(rowIndex, 1, 1)
    )
  );

  return moves;
}

function getPositionsForRook(rowIndex, columnIndex) {
  const moves = [];
  const upwardSteps = ROWS - (rowIndex + 1);
  const downwardSteps = ROWS - (upwardSteps + 1);
  const rightSteps = COLUMNS - (columnIndex + 1);
  const leftSteps = COLUMNS - (rightSteps + 1);
  moves.push(
    ...appendIndices.appendColumnIndices(
      columnIndex,
      getPositions.getVerticalPositions(rowIndex, upwardSteps, downwardSteps)
    )
  );
  moves.push(
    ...appendIndices.appendRowIndices(
      rowIndex,
      getPositions.getHorizontalPositions(columnIndex, leftSteps, rightSteps)
    )
  );

  return moves;
}

function getPositionsForPawn(rowIndex, columnIndex) {
  const moves = [];
  moves.push(
    ...appendIndices.appendColumnIndices(
      columnIndex,
      getPositions.getVerticalPositions(rowIndex, 1, 0)
    )
  );
  moves.push(
    ...getPositions.getDiagonalPositions(rowIndex, columnIndex, 1, 1, 0, 0)
  );

  return moves;
}

module.exports = {
  getPositionsForKing: getPositionsForKing,
  getPositionsForQueen: getPositionsForQueen,
  getPositionsForBishop: getPositionsForBishop,
  getPositionsForHorse: getPositionsForHorse,
  getPositionsForRook: getPositionsForRook,
  getPositionsForPawn: getPositionsForPawn,
};

var getDirectionWisePositions = require("../main/getDirectionWisePositions");
var appendIndices = require("../util/appendIndices");
const { ROWS, COLUMNS } = require("../../constants/chessBoard");

function getPositionsForKing(rowIndex, columnIndex) {
  const moves = [];
  moves.push(
    ...appendIndices.appendColumnIndices(
      columnIndex,
      getDirectionWisePositions.getVerticalPositions(rowIndex, 1, 1)
    )
  );
  moves.push(
    ...appendIndices.appendRowIndices(
      rowIndex,
      getDirectionWisePositions.getHorizontalPositions(columnIndex, 1, 1)
    )
  );
  moves.push(
    ...getDirectionWisePositions.getDiagonalPositions(
      rowIndex,
      columnIndex,
      1,
      1,
      1,
      1
    )
  );

  return moves;
}

function getPositionsForQueen(rowIndex, columnIndex) {
  const moves = getPositionsForRook(rowIndex, columnIndex);
  moves.push(
    ...getDirectionWisePositions.getDiagonalPositions(
      rowIndex,
      columnIndex,
      -1,
      -1,
      -1,
      -1
    )
  );

  return moves;
}

function getPositionsForBishop(rowIndex, columnIndex) {
  return getDirectionWisePositions.getDiagonalPositions(
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
  let verticalTravel = getDirectionWisePositions.getVerticalPositions(
    rowIndex,
    2,
    0
  );
  moves.push(
    ...appendIndices.appendRowIndices(
      verticalTravel[1],
      getDirectionWisePositions.getHorizontalPositions(columnIndex, 1, 1)
    )
  );
  let downwardTravel = getDirectionWisePositions.getVerticalPositions(
    rowIndex,
    0,
    2
  );
  moves.push(
    ...appendIndices.appendRowIndices(
      downwardTravel[0],
      getDirectionWisePositions.getHorizontalPositions(columnIndex, 1, 1)
    )
  );
  let horizontalTravel = getDirectionWisePositions.getHorizontalPositions(
    columnIndex,
    2,
    2
  );
  moves.push(
    ...appendIndices.appendColumnIndices(
      horizontalTravel[0],
      getDirectionWisePositions.getVerticalPositions(rowIndex, 1, 1)
    )
  );
  moves.push(
    ...appendIndices.appendColumnIndices(
      horizontalTravel[3],
      getDirectionWisePositions.getVerticalPositions(rowIndex, 1, 1)
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
      getDirectionWisePositions.getVerticalPositions(
        rowIndex,
        upwardSteps,
        downwardSteps
      )
    )
  );
  moves.push(
    ...appendIndices.appendRowIndices(
      rowIndex,
      getDirectionWisePositions.getHorizontalPositions(
        columnIndex,
        leftSteps,
        rightSteps
      )
    )
  );

  return moves;
}

function getPositionsForPawn(rowIndex, columnIndex) {
  const moves = [];
  moves.push(
    ...appendIndices.appendColumnIndices(
      columnIndex,
      getDirectionWisePositions.getVerticalPositions(rowIndex, 1, 0)
    )
  );
  moves.push(
    ...getDirectionWisePositions.getDiagonalPositions(
      rowIndex,
      columnIndex,
      1,
      1,
      0,
      0
    )
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

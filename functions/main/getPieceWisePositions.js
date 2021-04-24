const getDirectionWisePositions = require("../main/getDirectionWisePositions");
const appendIndices = require("../util/appendIndices");
const { ROWS, COLUMNS } = require("../../constants/chessBoard");
const calculateHorseTravel = require("../util/calculateHorseTravel");

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
  moves.push(...getPositionsForBishop(rowIndex, columnIndex));

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

  moves.push(...calculateHorseTravel.getUpwardTravel(rowIndex, columnIndex));

  moves.push(...calculateHorseTravel.getDownwardTravel(rowIndex, columnIndex));

  moves.push(
    ...calculateHorseTravel.getHorizontalTravel(rowIndex, columnIndex)
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

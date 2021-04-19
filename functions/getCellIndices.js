const sortArray = require("./sortArray");

function getVerticalPositions(rowIndex, upwardSteps, downwardSteps) {
  const rowIndices = [];
  if (upwardSteps > 0) {
    for (let index = 0; index < upwardSteps; index++) {
      rowIndices.push(rowIndex + index + 1);
    }
  }
  if (downwardSteps > 0) {
    for (let index = 0; index < downwardSteps; index++) {
      rowIndices.push(rowIndex - index - 1);
    }
  }

  return sortArray(rowIndices);
}

function getHorizontalPositions(columnIndex, leftSteps, rightSteps) {
  const columnIndices = [];
  if (leftSteps > 0) {
    for (let index = 0; index < leftSteps; index++) {
      columnIndices.push(columnIndex - index - 1);
    }
  }

  if (rightSteps > 0) {
    for (let index = 0; index < rightSteps; index++) {
      columnIndices.push(columnIndex + index + 1);
    }
  }

  return sortArray(columnIndices);
}

function getDiagonalPositions(
  rowIndex,
  columnIndex,
  rightUpwardSteps,
  leftUpwardSteps,
  rightDownwardSteps,
  leftDownwardSteps
) {
  const rowIndices = [];
  if (rightUpwardSteps > 0) {
    for (let index = 0; index < rightUpwardSteps; index++) {
      rowIndices.push([rowIndex + index + 1, columnIndex + index + 1]);
    }
  }
  if (leftUpwardSteps > 0) {
    for (let index = 0; index < leftUpwardSteps; index++) {
      rowIndices.push([rowIndex + index + 1, columnIndex - index - 1]);
    }
  }
  if (rightDownwardSteps > 0) {
    for (let index = 0; index < rightDownwardSteps; index++) {
      rowIndices.push([rowIndex - index - 1, columnIndex + index + 1]);
    }
  }

  if (leftDownwardSteps > 0) {
    for (let index = 0; index < leftDownwardSteps; index++) {
      rowIndices.push([rowIndex - index - 1, columnIndex - index - 1]);
    }
  }
  return rowIndices;
}

module.exports.getCellIndices = {
  getVerticalPositions: getVerticalPositions,
  getHorizontalPositions: getHorizontalPositions,
  getDiagonalPositions: getDiagonalPositions,
};

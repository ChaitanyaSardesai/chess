const { ROWS, COLUMNS } = require("../../constants/chessBoard");
const sortAscending = require("../util/sortArray");

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

  return sortAscending(rowIndices);
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

  return sortAscending(columnIndices);
}

function getDiagonalPositions(
  rowIndex,
  columnIndex,
  rightUpwardSteps,
  leftUpwardSteps,
  rightDownwardSteps,
  leftDownwardSteps
) {
  let rowIndices = [];
  rowIndices = [
    ...getRightUpwardSteps(rowIndices, rightUpwardSteps, rowIndex, columnIndex),
  ];

  rowIndices = [
    ...getLeftUpwardSteps(rowIndices, leftUpwardSteps, rowIndex, columnIndex),
  ];

  rowIndices = [
    ...getRightDownwardSteps(
      rowIndices,
      rightDownwardSteps,
      rowIndex,
      columnIndex
    ),
  ];

  rowIndices = [
    ...getLeftDownwardSteps(
      rowIndices,
      leftDownwardSteps,
      rowIndex,
      columnIndex
    ),
  ];
  return rowIndices;
}

function getRightUpwardSteps(
  rowIndices,
  rightUpwardSteps,
  rowIndex,
  columnIndex
) {
  if (rightUpwardSteps > 0) {
    for (let index = 0; index < rightUpwardSteps; index++) {
      rowIndices.push([rowIndex + index + 1, columnIndex + index + 1]);
    }
  } else {
    while (rowIndex < ROWS && columnIndex < COLUMNS) {
      rowIndex += 1;
      columnIndex += 1;
      rowIndices.push([rowIndex, columnIndex]);
    }
  }
  return rowIndices;
}

function getLeftUpwardSteps(
  rowIndices,
  leftUpwardSteps,
  rowIndex,
  columnIndex
) {
  if (leftUpwardSteps > 0) {
    for (let index = 0; index < leftUpwardSteps; index++) {
      rowIndices.push([rowIndex + index + 1, columnIndex - index - 1]);
    }
  } else {
    while (rowIndex < ROWS && columnIndex > 0) {
      rowIndex += 1;
      columnIndex -= 1;
      rowIndices.push([rowIndex, columnIndex]);
    }
  }
  return rowIndices;
}

function getRightDownwardSteps(
  rowIndices,
  rightDownwardSteps,
  rowIndex,
  columnIndex
) {
  if (rightDownwardSteps > 0) {
    for (let index = 0; index < rightDownwardSteps; index++) {
      rowIndices.push([rowIndex - index - 1, columnIndex + index + 1]);
    }
  } else {
    while (rowIndex > 0 && columnIndex < COLUMNS) {
      rowIndex -= 1;
      columnIndex += 1;
      rowIndices.push([rowIndex, columnIndex]);
    }
  }
  return rowIndices;
}

function getLeftDownwardSteps(
  rowIndices,
  leftDownwardSteps,
  rowIndex,
  columnIndex
) {
  if (leftDownwardSteps > 0) {
    for (let index = 0; index < leftDownwardSteps; index++) {
      rowIndices.push([rowIndex - index - 1, columnIndex - index - 1]);
    }
  } else {
    while (rowIndex > 0 && columnIndex > 0) {
      rowIndex -= 1;
      columnIndex -= 1;
      rowIndices.push([rowIndex, columnIndex]);
    }
  }
  return rowIndices;
}

module.exports = {
  getVerticalPositions: getVerticalPositions,
  getHorizontalPositions: getHorizontalPositions,
  getDiagonalPositions: getDiagonalPositions,
};

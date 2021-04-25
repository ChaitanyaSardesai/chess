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
  let rowColumnPairs = [];
  rowColumnPairs = [
    ...getRightUpwardSteps(
      rowColumnPairs,
      rightUpwardSteps,
      rowIndex,
      columnIndex
    ),
  ];

  rowColumnPairs = [
    ...getLeftUpwardSteps(
      rowColumnPairs,
      leftUpwardSteps,
      rowIndex,
      columnIndex
    ),
  ];

  rowColumnPairs = [
    ...getRightDownwardSteps(
      rowColumnPairs,
      rightDownwardSteps,
      rowIndex,
      columnIndex
    ),
  ];

  rowColumnPairs = [
    ...getLeftDownwardSteps(
      rowColumnPairs,
      leftDownwardSteps,
      rowIndex,
      columnIndex
    ),
  ];

  return rowColumnPairs;
}

function getRightUpwardSteps(
  rowColumnPairs,
  rightUpwardSteps,
  rowIndex,
  columnIndex
) {
  if (rightUpwardSteps > 0) {
    for (let index = 0; index < rightUpwardSteps; index++) {
      rowColumnPairs.push([rowIndex + index + 1, columnIndex + index + 1]);
    }
  } else {
    while (rowIndex < ROWS && columnIndex < COLUMNS) {
      rowIndex += 1;
      columnIndex += 1;
      rowColumnPairs.push([rowIndex, columnIndex]);
    }
  }

  return rowColumnPairs;
}

function getLeftUpwardSteps(
  rowColumnPairs,
  leftUpwardSteps,
  rowIndex,
  columnIndex
) {
  if (leftUpwardSteps > 0) {
    for (let index = 0; index < leftUpwardSteps; index++) {
      rowColumnPairs.push([rowIndex + index + 1, columnIndex - index - 1]);
    }
  } else {
    while (rowIndex < ROWS && columnIndex > 0) {
      rowIndex += 1;
      columnIndex -= 1;
      rowColumnPairs.push([rowIndex, columnIndex]);
    }
  }

  return rowColumnPairs;
}

function getRightDownwardSteps(
  rowColumnPairs,
  rightDownwardSteps,
  rowIndex,
  columnIndex
) {
  if (rightDownwardSteps !== 0) {
    if (rightDownwardSteps > 0) {
      for (let index = 0; index < rightDownwardSteps; index++) {
        rowColumnPairs.push([rowIndex - index - 1, columnIndex + index + 1]);
      }
    } else {
      while (rowIndex > 0 && columnIndex < COLUMNS) {
        rowIndex -= 1;
        columnIndex += 1;
        rowColumnPairs.push([rowIndex, columnIndex]);
      }
    }
  }

  return rowColumnPairs;
}

function getLeftDownwardSteps(
  rowColumnPairs,
  leftDownwardSteps,
  rowIndex,
  columnIndex
) {
  if (leftDownwardSteps !== 0) {
    if (leftDownwardSteps > 0) {
      for (let index = 0; index < leftDownwardSteps; index++) {
        rowColumnPairs.push([rowIndex - index - 1, columnIndex - index - 1]);
      }
    } else {
      while (rowIndex > 0 && columnIndex > 0) {
        rowIndex -= 1;
        columnIndex -= 1;
        rowColumnPairs.push([rowIndex, columnIndex]);
      }
    }
  }
  return rowColumnPairs;
}

module.exports = {
  getVerticalPositions: getVerticalPositions,
  getHorizontalPositions: getHorizontalPositions,
  getDiagonalPositions: getDiagonalPositions,
};

const getDirectionWisePositions = require("../main/getDirectionWisePositions");
const appendIndices = require("./appendIndices");

function getUpwardTravel(rowIndex, columnIndex) {
  let upwardTravel = getDirectionWisePositions.getVerticalPositions(
    rowIndex,
    2,
    0
  );
  return appendIndices.appendRowIndices(
    upwardTravel[1],
    getDirectionWisePositions.getHorizontalPositions(columnIndex, 1, 1)
  );
}

function getDownwardTravel(rowIndex, columnIndex) {
  let downwardTravel = getDirectionWisePositions.getVerticalPositions(
    rowIndex,
    0,
    2
  );
  return appendIndices.appendRowIndices(
    downwardTravel[0],
    getDirectionWisePositions.getHorizontalPositions(columnIndex, 1, 1)
  );
}

function getHorizontalTravel(rowIndex, columnIndex) {
  const travel = [];
  let horizontalTravel = getDirectionWisePositions.getHorizontalPositions(
    columnIndex,
    2,
    2
  );
  travel.push(
    ...appendIndices.appendColumnIndices(
      horizontalTravel[0],
      getDirectionWisePositions.getVerticalPositions(rowIndex, 1, 1)
    )
  );
  travel.push(
    ...appendIndices.appendColumnIndices(
      horizontalTravel[3],
      getDirectionWisePositions.getVerticalPositions(rowIndex, 1, 1)
    )
  );
  return travel;
}

module.exports = {
  getUpwardTravel: getUpwardTravel,
  getDownwardTravel: getDownwardTravel,
  getHorizontalTravel: getHorizontalTravel,
};

const composeChessBoardMap = require("../../../functions/util/composeChessBoardMap");
const getCellIdsString = require("../../../functions/util/getCellsIdsString");

describe("GetCellIdsString", function () {
  it("should return cell IDs based on the index combinations", function () {
    const chessBoard = composeChessBoardMap();
    const indicesArray = [
      [1, 4],
      [2, 5],
      [3, 6],
      [4, 7],
      [5, 8],
      [1, 2],
      [2, 1],
      [3, 0],
    ];
    const result = getCellIdsString(chessBoard, indicesArray);
    expect(result).toEqual("B5, C6, D7, E8, B3, C2, D1");
  });

  it("should omit empty elements from the return cell IDs array", function () {
    const chessBoard = composeChessBoardMap();
    const indicesArray = [
      [1, 4],
      [2, 5],
      [3, 6],
      [4, 7],
      [5, 8],
      [1, 2],
      [2, 1],
      [3, 0],
    ];
    const result = getCellIdsString(chessBoard, indicesArray);
    expect(result.split(",").length).toEqual(indicesArray.length - 1);
  });

  it("should return a message when there are no places to move for the current piece", function () {
    const chessBoard = composeChessBoardMap();
    const indicesArray = [
      [8, 3],
      [8, 4],
      [8, 2],
    ];
    const result = getCellIdsString(chessBoard, indicesArray);
    expect(result).toEqual("The chess piece doesn't have any possible moves.");
  });
});

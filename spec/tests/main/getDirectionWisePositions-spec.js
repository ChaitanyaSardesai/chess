const getDirectionWisePositions = require("../../../functions/main/getDirectionWisePositions");

describe("GetDirectionWisePositions", function () {
  it("should return sorted array of row indices when King has to move vertically with 1 step upward and 1 step downward", function () {
    const result = getDirectionWisePositions.getVerticalPositions(3, 1, 1);
    expect(result).toEqual([2, 4]);
  });

  it("should return sorted array of column indices when Rook has to move horizontally with 3 leftward steps and 4 rightward steps", function () {
    const result = getDirectionWisePositions.getHorizontalPositions(3, 3, 4);
    expect(result).toEqual([0, 1, 2, 4, 5, 6, 7]);
  });

  it("should return array of row column pairs when Queen has to move diagonally across the board", function () {
    const result = getDirectionWisePositions.getDiagonalPositions(
      3,
      4,
      -1,
      -1,
      -1,
      -1
    );
    expect(result).toEqual([
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [4, 3],
      [5, 2],
      [6, 1],
      [7, 0],
      [2, 5],
      [1, 6],
      [0, 7],
      [2, 3],
      [1, 2],
      [0, 1],
    ]);
  });
});

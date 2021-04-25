const appendIndices = require("../../../functions/util/appendIndices");

describe("AppendIndices", function () {
  it("should append row indices when travelled vertically", function () {
    const result = appendIndices.appendRowIndices(3, [0, 1, 2, 3, 5, 6, 7]);
    expect(result).toEqual([
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 5],
      [3, 6],
      [3, 7],
    ]);
  });

  it("should append column indices when travelled horizontally", function () {
    const result = appendIndices.appendColumnIndices(4, [0, 1, 2, 4, 5, 6, 7]);
    expect(result).toEqual([
      [0, 4],
      [1, 4],
      [2, 4],
      [4, 4],
      [5, 4],
      [6, 4],
      [7, 4],
    ]);
  });
});

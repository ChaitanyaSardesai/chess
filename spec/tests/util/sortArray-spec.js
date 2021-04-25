const sortInAscendingOrder = require("../../../functions/util/sortArray");

describe("SortArray", function () {
  it("should sort an input number array in ascending order", function () {
    const result = sortInAscendingOrder([2, 5, 3, 4, 1, 9, 8, 10]);
    expect(result).toEqual([1, 2, 3, 4, 5, 8, 9, 10]);
  });
});

const composeChessBoardMap = require("../../../functions/util/composeChessBoardMap");

describe("ComposeChessBoardMap", function () {
  it("should create a Map set with row and column arrays as a keys with the corresponding cell IDs as values", function () {
    const result = composeChessBoardMap();
    expect(result.get("3_4")).toEqual("D5");
    expect(result.get("0_0")).toEqual("A1");
    expect(result.get("4_2")).toEqual("E3");
    expect(result.get("7_7")).toEqual("H8");
  });
});

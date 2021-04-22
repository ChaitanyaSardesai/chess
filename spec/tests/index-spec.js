const getPossiblePieceMoves = require("../../functions/main/getPossiblePieceMoves");
var indexApp = require("../../index");

describe("Index", function () {
  it("should return possible moves for King", function () {
    const result = getPossiblePieceMoves("King", "D5");
    expect(result).toEqual("C5, E5, D4, D6, E6, E4, C6, C4");
  });

  it("should return possible moves for Queen", function () {
    const result = getPossiblePieceMoves("Queen", "A1");
    expect(result).toEqual(
      "B1, C1, D1, E1, F1, G1, H1, A2, A3, A4, A5, A6, A7, A8, B2, C3, D4, E5, F6, G7, H8"
    );
  });

  it("should return possible moves for Pawn", function () {
    const result = getPossiblePieceMoves("Pawn", "H2");
    expect(result).toEqual("The chess piece doesn't have possible moves.");
  });
});

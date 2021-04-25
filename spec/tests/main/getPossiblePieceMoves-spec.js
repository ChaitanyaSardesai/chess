const getPossiblePieceMoves = require("../../../functions/main/getPossiblePieceMoves");

describe("GetPossiblePieceMoves", function () {
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

  it("should return possible moves for Bishop", function () {
    const result = getPossiblePieceMoves("Bishop", "C4");
    expect(result).toEqual("D5, E6, F7, G8, D3, E2, F1, B5, A6, B3, A2");
  });

  it("should return possible moves for Horse", function () {
    const result = getPossiblePieceMoves("Horse", "F2");
    expect(result).toEqual("H1, H3, D1, D3, E4, G4");
  });

  it("should return possible moves for Rook", function () {
    const result = getPossiblePieceMoves("Rook", "B8");
    expect(result).toEqual(
      "A8, C8, D8, E8, F8, G8, H8, B1, B2, B3, B4, B5, B6, B7"
    );
  });

  it("should return possible moves for Pawn positioned at the H row", function () {
    const result = getPossiblePieceMoves("Pawn", "H2");
    expect(result).toEqual("The chess piece doesn't have any possible moves.");
  });

  it("should return an error when the type of piece is misspelled.", function () {
    const result = getPossiblePieceMoves("queen", "H2");
    expect(result).toEqual(
      "Please check the piece type. The name should start with a capital letter. Ex. King."
    );
  });
});

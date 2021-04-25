const getPieceWisePositions = require("../../../functions/main/getPieceWisePositions");

describe("GetPieceWisePositions", function () {
  it("should return array of row and column indices corresponding to the cells King can move to", function () {
    const result = getPieceWisePositions.getPositionsForKing(3, 2);
    expect(result).toEqual([
      [2, 2],
      [4, 2],
      [3, 1],
      [3, 3],
      [4, 3],
      [4, 1],
      [2, 3],
      [2, 1],
    ]);
  });

  it("should return array of row and column indices corresponding to the cells Queen can move to", function () {
    const result = getPieceWisePositions.getPositionsForQueen(4, 5);
    expect(result).toEqual([
      [0, 5],
      [1, 5],
      [2, 5],
      [3, 5],
      [5, 5],
      [6, 5],
      [7, 5],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
      [4, 6],
      [4, 7],
      [5, 6],
      [6, 7],
      [7, 8],
      [5, 4],
      [6, 3],
      [7, 2],
      [8, 1],
      [3, 6],
      [2, 7],
      [1, 8],
      [3, 4],
      [2, 3],
      [1, 2],
      [0, 1],
    ]);
  });

  it("should return array of row and column indices corresponding to the cells Bishop can move to", function () {
    const result = getPieceWisePositions.getPositionsForBishop(2, 3);
    expect(result).toEqual([
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [3, 2],
      [4, 1],
      [5, 0],
      [1, 4],
      [0, 5],
      [1, 2],
      [0, 1],
    ]);
  });

  it("should return array of row and column indices corresponding to the cells Horse can move to", function () {
    const result = getPieceWisePositions.getPositionsForHorse(5, 5);
    expect(result).toEqual([
      [7, 4],
      [7, 6],
      [3, 4],
      [3, 6],
      [4, 3],
      [6, 3],
      [4, 7],
      [6, 7],
    ]);
  });

  it("should return array of row and column indices corresponding to the cells Rook can move to", function () {
    const result = getPieceWisePositions.getPositionsForRook(6, 4);
    expect(result).toEqual([
      [0, 4],
      [1, 4],
      [2, 4],
      [3, 4],
      [4, 4],
      [5, 4],
      [7, 4],
      [6, 0],
      [6, 1],
      [6, 2],
      [6, 3],
      [6, 5],
      [6, 6],
      [6, 7],
    ]);
  });

  it("should return array of row and column indices corresponding to the cells Pawn can move to", function () {
    const result = getPieceWisePositions.getPositionsForPawn(0, 7);
    expect(result).toEqual([
      [1, 7],
      [1, 8],
      [1, 6],
    ]);
  });
});

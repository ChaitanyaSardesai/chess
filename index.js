var Piece = require("./models/piece");
var drawChessBoard = require("./functions/drawChessBoard");
var getVerticalPositions = require("./functions/getDiagonalPositions");

//const possibleMovePositions = getPossibleMoves("King", "D5");
const result = getVerticalPositions(4, 2, 3, 2, 4, 2);
const check = new Piece(true, false, false, false);
console.log(result);

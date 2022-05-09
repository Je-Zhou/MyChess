import Square from "./Square";
import Row from "./Row";
import { Piece } from "../Pieces/Piece";

function ChessBoard() {
  /*
  ChessBoards are represented in a 8x8 grid.
  They have a chequered design between light and dark squares
  The first bottom left square is dark

  Let's create the grid in a matrix
  
  [[56, 57, 58, 59, 60, 61, 62, 63],
   [48, 49, 50, 51, 52, 53, 54, 55],
   [40, 41, 42, 43, 44, 45, 46, 47],
   [32, 33, 34, 35, 36, 37, 38, 39],
   [24, 25, 26, 27, 28, 29, 30, 31],
   [16, 17, 18, 19, 20, 21, 22, 23],
   [08, 09, 10, 11, 12, 13, 14, 15],
   [00, 01, 02, 03, 04, 05, 06, 07]]
   
   To create grid we'll create a custom type to handle the x and y co-ordinates
   
   */

  function generateBoard(pieces: Piece[][]) {
    // Here is the empty array we will populate with Rows
    const chessBoard = [];

    // Iterate through the rows
    for (let y = 7; y >= 0; y--) {
      const row = [];
      for (let x = 0; x <= 7; x++) {
        const piece = pieces[y][x];
        const square = y * 8 + x;
        row.push(<Square key={square} square={square} piece={piece} />);
      }
      chessBoard.push(<Row key={y} row={row} />);
    }
    return chessBoard;
  }

  return <div>{generateBoard(Array(8).fill(Array(8)))}</div>;
}

export default ChessBoard;

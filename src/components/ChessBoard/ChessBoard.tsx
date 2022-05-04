import React from "react";
import Tile from "./Tile";
import { Point } from "./types";
import Row from "./Row";

function ChessBoard() {
  /*
  ChessBoards are represented in a 8x8 grid.
  They have a chequered design between light and dark squares
  1a starts dark

  Let's create the grid in a matrix
  
  [[a8, b8, c8, d8, e8, f8, j8, h8],
   [a7, b7, c7, d7, e7, f7, j7, h7],
   [a6, b6, c6, d6, e6, f6, j6, h6],
   [a5, b5, c5, d5, e5, f5, j5, h5],
   [a4, b4, c4, d4, e4, f4, j4, h4],
   [a3, b3, c3, d3, e3, f3, j3, h3],
   [a2, b2, c2, d2, e2, f2, j2, h2],
   [a1, b1, c1, d1, e1, f1, j1, h1]]
   
   To create grid we'll create a custom type to handle the x and y co-ordinates
   
   */

  function generateBoard() {
    // Here is the empty array we will populate with Rows
    const chessBoard = [];

    // Iterate through the rows
    for (let y = 8; y >= 1; y--) {
      const row = [];
      for (let x = 1; x <= 8; x++) {
        const point: Point = { x, y };
        row.push(<Tile key={x} point={point} />);
      }
      chessBoard.push(<Row key={y} row={row} />);
    }
    return chessBoard;
  }

  return <div>{generateBoard()}</div>;
}

export default ChessBoard;

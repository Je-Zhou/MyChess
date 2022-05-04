import React from "react";
import { Point } from "./types";
import "./ChessBoard.css";

export interface TileProps {
  point: Point;
}

function Tile({ point }: TileProps) {
  const style = {
    backgroundColor: (point.x - point.y) % 2 === 0 ? "grey" : "white",
  };

  const columnLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const column: string = columnLetters[point.x - 1];

  return (
    <div className="tile" style={style}>
      <p className="tile-number">{`${column}${point.y}`}</p>
    </div>
  );
}

export default Tile;

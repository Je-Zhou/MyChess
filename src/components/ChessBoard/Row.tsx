import React from "react";
import "./ChessBoard";

export interface RowProps {
  row: JSX.Element[];
}

function Row({ row }: RowProps) {
  console.log(row);
  return <div className="row">{row}</div>;
}

export default Row;

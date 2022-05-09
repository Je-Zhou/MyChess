import React from "react";
import "./ChessBoard";

export interface RowProps {
  row: JSX.Element[];
}

function Row({ row }: RowProps) {
  return <div className="row">{row}</div>;
}

export default Row;

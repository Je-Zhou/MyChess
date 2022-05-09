import { Piece } from "../Pieces/Piece";
import "./ChessBoard.css";

export interface TileProps {
  square: number;
  piece: Piece;
}

function Tile({ square, piece }: TileProps) {
  const row = Math.floor(square / 8);

  const style = {
    backgroundColor: (square + row) % 2 === 0 ? "grey" : "white",
  };

  return (
    <div className="tile" style={style}>
      <p className="tile-number">{square}</p>
      {piece && (
        <img className="piece" alt="Piece" src={piece.getImagePath()} />
      )}
    </div>
  );
}

export default Tile;

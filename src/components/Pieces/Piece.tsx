export enum PieceType {
  pawn,
  bishop,
  knight,
  rook,
  queen,
  king,
  none,
}

export enum Color {
  black,
  white,
  none,
}

export class Piece {
  type: PieceType;
  color: Color;

  constructor(type: PieceType, color: Color) {
    this.type = type;
    this.color = color;
  }

  getImagePath(): string {
    if (this.color === Color.black) {
      switch (this.type) {
        case PieceType.pawn:
          return "/images/dark-pawn.png";
        case PieceType.bishop:
          return "/images/dark-bishop.png";
        case PieceType.knight:
          return "/images/dark-knight.png";
        case PieceType.rook:
          return "/images/dark-rook.png";
        case PieceType.queen:
          return "/images/dark-queen.png";
        case PieceType.king:
          return "/images/dark-king.png";
        default:
          return "";
      }
    } else {
      switch (this.type) {
        case PieceType.pawn:
          return "/images/light-pawn.png";
        case PieceType.bishop:
          return "/images/light-bishop.png";
        case PieceType.knight:
          return "/images/light-knight.png";
        case PieceType.rook:
          return "/images/light-rook.png";
        case PieceType.queen:
          return "/images/light-queen.png";
        case PieceType.king:
          return "/images/light-king.png";
        default:
          return "";
      }
    }
  }
}

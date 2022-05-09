export function translateFEN(fen: string) {
  /*
    FEN notation is a way of reading the board's current position and gamestate.

1.  The numbers represent how many squares from l-r are unoccupied
    The / represents divisions in the 8 rows on the board
    lower case letters represent dark pieces and the capital letters represent light pieces

    P = light pawn      p = dark pawn
    N = light knight    n = dark knight
    B = light bishop    b = dark bishop
    R = light rook      r = dark rook
    Q = light queen     q = dark queen
    K = light king      k = dark king

2.  The second field will be either "w" or "b"
    This represents the side to move

    w = light side's turn   b = dark side's turn


3.  The third field provides information on each side's castling rights
    Uppercase letters come first and indicate light side's ability to castle
    Lowercase letter represent dark side's ability to castle

    K = Light King can castle kingside      k = Dark King can castle kingside
    Q = Light King can castle queenside     q = Dark King can castle queenside

4.  The next field contains possible "En Passant" targets
    When a pawn chooses to move two squares as its first move of the game,
    It opens it up to being captured by an enemy pawn in the same row it has moved to.
    The enemy pawn would move to the square behind the captured pawn
    This field will contain the square where an en passant is available

5.  The fifth field is how many moves have been made by both players since the last pawn
    was advanced or a piece was captured.
    When this number reaches 100, the game ends in a draw

6.  The last field is how many turns have been completed in the game. 
    The number increases by 1 everytime dark side makes a move


    Here is an example:

    8/8/8/4p1K1/2k1P3/8/8/8 b - - 0 1

    _,_,_,_,_,_,_,_,
    _,_,_,_,_,_,_,_,
    _,_,_,_,_,_,_,_,
    _,_,_,_,♟,_,♔,_,
    _,_,♚,_,♙,_,_,_,
    _,_,_,_,_,_,_,_,
    _,_,_,_,_,_,_,_,
    _,_,_,_,_,_,_,_,

    It is black's move
    No side has castling rights
    No en passant is available
    No halfmoves were made
    Only 1 has been completed


    Information and example sourced from: "https://www.chess.com/terms/fen-chess"
]
*/
}

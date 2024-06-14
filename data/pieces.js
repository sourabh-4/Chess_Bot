//black pieces
 function blackPawn(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/black/pawn.png",
        piece_name: "BLACK_PAWN",
    };
 }
 function blackBishop(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/black/bishop.png",
        piece_name: "BLACK_BISHOP",
    };
 }
 function blackKing(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/black/king.png",
        piece_name: "BLACK_KING",
    };
 }
 function blackKnight(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/black/Knight.png",
        piece_name: "BLACK_KNIGHT",
    };
 }
 function blackQueen(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/black/queen.png",
        piece_name: "BLACK_QUEEN",
    };
 }
 function blackRook(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/black/rook.png",
        piece_name: "BLACK_ROOK",
    };
 }


//white pieces
 function whitePawn(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/white/pawn.png",
        piece_name: "WHITE_PAWN",
    };
 }
 function whiteBishop(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/white/bishop.png",
        piece_name: "WHITE_BISHOP",
    };
 }
 function whiteKing(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/white/King.png",
        piece_name: "WHITE_KING",
    };
 }
 function whiteKnight(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/white/knight.png",
        piece_name: "WHITE_KNIGHT",
    };
 }
 function whiteQueen(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/white/queen.png",
        piece_name: "WHITE_QUEEN",
    };
 }
 function whiteRook(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/white/rook.png",
        piece_name: "WHITE_ROOK",
    };
 }


export {blackPawn, blackBishop, blackKing, blackKnight, blackQueen, blackRook, 
        whitePawn, whiteBishop, whiteKing, whiteKnight, whiteQueen, whiteRook};
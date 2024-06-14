 function blackPawn(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/black/pawn.png",
    };
 }



 function whitePawn(current_position){
    return {
        current_position,
        img: "Assets/images/pieces/white/pawn.png",
    };
 }


 export {blackPawn, whitePawn};
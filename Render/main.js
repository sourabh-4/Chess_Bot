import { blackPawn } from "../data/pieces.js";
import { whitePawn } from "../data/pieces.js";

const ROOT_DIV = document.getElementById("root");

//use when you want to render pieces on the board
function pieceRender(data) {
    data.forEach(row => {
        row.forEach((square) => {

            //if square has piece
            if (square.piece) {
                const squareEl = document.getElementById(square.id);

                //create piece
                const piece = document.createElement("img");
                piece.src = square.piece.img;
                piece.classList.add("piece");

                //insert piece into square element
                squareEl.appendChild(piece);
            }
        });
    });
}

//use when you want to render the board for the first time when the game starts
function initGameRender(data) {
    data.forEach(element => {
        const rowEl = document.createElement("div");
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add("square");
            squareDiv.style.backgroundColor = square.color;
            
            //render black pawn
            if (square.id[1] == 7){
                square.piece = blackPawn(square.id);
            }

            //render black pawn
            if (square.id[1] == 2){
                square.piece = whitePawn(square.id);
            }
            
            rowEl.appendChild(squareDiv);
        });
        
        rowEl.classList.add('squareRow');
        ROOT_DIV.appendChild(rowEl);
    });

    pieceRender(data);
}

export {initGameRender};
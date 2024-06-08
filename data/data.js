const element = document.createElement("div");
element.style.backgroundColor = "#769656";
element.style.width = "200px";
element.style.height = "200px";

document.getElementsByTagName("div")[0].appendChild(element);

// For each square
function square(color, id, piece){
    return {color, id, piece}
};

function squareRow(rowID){
    const squareRow = [];
    const charArray = ['a','b','c','d','e','f','g','h'];

    if (rowID % 2 == 0){
        for (let j = 0; j<8; j++){
            if (j%2 == 0){
                squareRow.push(square('white', String(charArray[j]+rowID), null))
            }
            else{
                squareRow.push(square('black', String(charArray[j]+rowID), null))
            }
            
        }
    }
    else{
        for (let j = 0; j<8; j++){
            if (j%2 == 0){
                squareRow.push(square('black', String(charArray[j]+rowID), null))
            }
            else{
                squareRow.push(square('white', String(charArray[j]+rowID), null))
            }
            
        }
    }

    return squareRow;
};

function initGame(){
    const square = [];

    for (let i = 8; i>0; i--){
        square.push(squareRow(i));
    }

    return square;
};


export { initGame };

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
    if (rowID % 2 == 0){
        squareRow.push(square('white', 'something', null))
    }
    else{
        squareRow.push(square('#769656', 'something', null))
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

console.log(initGame());

export {initGame};

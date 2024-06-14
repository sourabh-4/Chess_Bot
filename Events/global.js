import {ROOT_DIV} from "../Helper/constants.js";

function GlobalEvent() {
    ROOT_DIV.addEventListener("click", function(event){
        console.log(event);
    })
}

export {GlobalEvent};
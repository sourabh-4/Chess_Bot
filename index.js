import { initGame } from "./data/data.js";
import { initGameRender } from "./Render/main.js";

const globalState = initGame();

initGameRender(globalState);

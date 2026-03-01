// TODO: write code here

import { GridWidgit, createGrid} from "./grid-widget/grid-widget";
import {GameWidgit, createGame} from "./game-widget/game-widget";

document.addEventListener("DOMContentLoaded", () => {
  createGame();
  const game = new GameWidgit(document.querySelector(".game"));
  createGrid(4, 4, (cellClick) => {
    game.checkClick(cellClick, grid.getActiveCell());
  });
  const grid = new GridWidgit(document.querySelector(".grid"));
  const newInterval = setInterval(() => {
    grid.changeActiveCell();
  }, 1000);

  window.addEventListener("beforeunload", () => {
    clearInterval(newInterval);
  });
});

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

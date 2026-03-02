// TODO: write code here

import { GridWidgit, renderGrid } from "./grid-widget/grid-widget";
import { GameWidgit, renderGame } from "./game-widget/game-widget";

document.addEventListener("DOMContentLoaded", () => {
  const gridElement = renderGrid(4, 4, (cellClick) => {
    if (game.getGameEnded()) return;
    game.checkClick(cellClick, grid);
  });

  renderGame(gridElement);

  const grid = new GridWidgit(document.querySelector(".grid"));

  const game = new GameWidgit(document.querySelector(".game"));

  const newInterval = setInterval(() => {
    if (game.getGameEnded()) return;
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

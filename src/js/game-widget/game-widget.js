export class GameWidgit {
  constructor(element, maxMiss = 5) {
    this._element = element;
    this._score = 0;
    this._miss = 0;
    this._scoreElement = this._element.querySelector(".score");
    this._missElement = this._element.querySelector(".miss");
    this._statElement = this._element.querySelector(".stat");
    this._maxMiss = maxMiss;
    this._isGameEnded = false;
  }

  checkClick(cellClick, grid) {
    if (cellClick === grid.activeCell && cellClick !== grid.getClickedCell()) {
      grid.changeToClicked(cellClick);
      this.addScore();
    } else {
      this.addMiss();
    }
  }

  addScore() {
    this._score++;
    this._scoreElement.innerText = `Score: ${this._score}`;
  }

  addMiss() {
    this._miss++;
    this._missElement.innerText = `Miss: ${this._miss}`;
    if (this._miss == this._maxMiss) {
      this.endGame();
    }
  }

  getGameEnded() {
    return this._isGameEnded;
  }

  endGame() {
    this._isGameEnded = true;
    const gameOver = document.createElement("div");
    gameOver.className = "game-over";
    gameOver.innerText = "Game Over";
    this._statElement.appendChild(gameOver);
  }
}

export function renderGame(gridElement) {
  const game = document.createElement("div");
  game.className = "game";

  const statDiv = document.createElement("div");
  statDiv.className = "stat";

  const scoreEl = document.createElement("div");
  scoreEl.className = "score";
  scoreEl.innerText = "Score: 0";

  const missesEl = document.createElement("div");
  missesEl.className = "miss";
  missesEl.innerText = "Miss: 0";

  statDiv.appendChild(scoreEl);
  statDiv.appendChild(missesEl);

  game.appendChild(gridElement);
  game.appendChild(statDiv);
  document.body.appendChild(game);
}

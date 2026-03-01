export class Game {
    constructor () {

    }

    checkClick (cellClick, activeCell) {
      if (cellClick === activeCell) {
        this.addScore()
      }
      else {
        this.addMiss()
      }
    }

    addScore () {

    }

    addMiss () {

    }

    endGame () {

    }
}

export function createGame () {
  
}
export class GridWidgit {
  constructor(element) {
    this._element = element;
    this.cells = this._element.querySelectorAll(".cell");
    this.activeCell = Math.floor(Math.random() * this.cells.length);
    this.cells[this.activeCell].classList.add("active");
  }

  changeActiveCell() {
    this.cells[this.activeCell].classList.remove("active");
    this.activeCell = this._getRandomCellIndex(this.activeCell);
    this.cells[this.activeCell].classList.add("active");
  }

  getActiveCell() {
    return this.activeCell;
  }

  _getRandomCellIndex(currentCellIndex) {
    const availableIndexes = Array.from(
      { length: this.cells.length },
      (_, i) => i,
    ).filter((i) => i !== currentCellIndex);
    const randomIndex =
      availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    return randomIndex;
  }
}

export function renderGrid(rows, cols, cellClick) {
  const table = document.createElement("table");
  table.className = "grid";
  let n = 0;
  for (let i = 1; i <= rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 1; j <= cols; j++) {
      const td = document.createElement("td");
      td.className = "cell";
      tr.appendChild(td);
      const cellNumber = n;
      n++;
      td.addEventListener("click", () => {
        if (cellClick) {
          cellClick(cellNumber);
        }
      });
    }
    table.appendChild(tr);
  }
  return table;
}

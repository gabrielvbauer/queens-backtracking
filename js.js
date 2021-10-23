window.onload = () => {
  drawBoard(8)
}

function start() {
  let ammount = document.getElementById("squareAmount").value;

  drawBoard(ammount)
}

function drawBoard(ammount) {
  let board = document.getElementById("chess-board")
  board.innerHTML = '';

  for(let row = 0; row < ammount; row++) {
    let rowSquare = board.appendChild(document.createElement("div"))
    for(let col = 0; col < ammount; col++) {
      rowSquare.appendChild(document.createElement("span"))
    }
  }
}

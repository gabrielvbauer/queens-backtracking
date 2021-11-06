import solveQueensBacktracking from "./backtracking.js";

// put the size of the square here
const square = 4;
console.log(solveQueensBacktracking(square).result);
console.log('Total de possibilidades: ', solveQueensBacktracking(square).total);

/* 
window.onload = () => {
  drawBoard(8)
}

const queenIcon = 'fas fa-chess-queen fa-2x'

function start() {
  const minAmmount = 4;
  let ammount = parseInt(document.getElementById("squareAmount").value);
  
  ammount < minAmmount ? ammount = minAmmount : ammount

  drawBoard(ammount)
  generateRandomQueen(ammount)
  factorial(ammount)
}

function drawBoard(ammount, qun) {
  let board = document.getElementById("chess-board")
  board.innerHTML = '';

  let square;
  for(let row = 0; row < ammount; row++) {
    let rowSquare = board.appendChild(document.createElement("div"))
    for(let col = 0; col < ammount; col++) {
      square = document.createElement("span")
      rowSquare.appendChild(square)
      square.id = `${row}, ${col}`
    }
  }

}

const factorial = (value) => {
  if (value === 0 || value === 1) return 1
  let result = factorial(value - 1) * value
  let id = document.getElementById('probabilidade')
  return id.innerHTML = result
}

const generateRandomQueen = (ammount) => {
  for (let i = 0; i < ammount; i++) {    
    insertQueen(ammount);
  }
}

const insertQueen = (ammount) => {
  const min = ammount - ammount
  const max = ammount 
  const x = parseInt(Math.random() * (max - min) + min)
  const y = parseInt(Math.random() * (max - min) + min)

  let selectSquare = document.getElementById(`${x}, ${y}`)
  
  let icon = document.createElement('i')
  icon.className = queenIcon
  return selectSquare.appendChild(icon)
} */
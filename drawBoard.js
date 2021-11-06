import solveQueensBacktracking from "./backtracking.js";

const queenIcon = 'fas fa-chess-queen fa-2x'
 
window.onload = () => {
  drawBoard(8)
}

function start() {
  const minAmmount = 4;
  let ammount = parseInt(document.getElementById("squareAmount").value);
  
  ammount < minAmmount ? ammount = minAmmount : ammount

  drawBoard(ammount)
  showSolution(solveQueensBacktracking(ammount))
}

function drawBoard(ammount) {
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

function showSolution(solved) {
  const solutions = solved.result
  const totalSolutions = solved.total
  const solutionToShow = parseInt(Math.random() * totalSolutions)
  const solution = solutions[solutionToShow]

  solution.forEach((column, row) => {
    const selectedSquare = document.getElementById(`${row}, ${column}`)
    const icon = document.createElement('i')
    icon.className = queenIcon
    selectedSquare.appendChild(icon)
  });

  document.getElementById('solucoes').innerHTML = totalSolutions
}

document.querySelector('button').addEventListener('click', start)
const solveQueensBacktracking = (n) => {
    // Array responsável por armazenar as soluções possíveis.
    const results = [];
     
    const depthFirstSearch = (i, n, slate) => {
      // Última rainha baseada no retrocesso.
      let lastQueen = i - 1;
  
      for (let prevQueen = 0; prevQueen < lastQueen; prevQueen++) {
        // Verificação para descobrir se há um conflito na coluna.
        if (slate[prevQueen] === slate[lastQueen]) return;
  
        // Verificação para saber se há um conflito entre as diagonais.
        let rowDiff = Math.abs(prevQueen - lastQueen);
        let colDiff = Math.abs(slate[prevQueen] - slate[lastQueen]);
        if(rowDiff === colDiff) return;
      }
  
      // Busca completa.
      if (i === n) {
        results.push(slate.slice());
        return;
      }
  
      // Recursividade da busca em profundidade.
      for(let col = 0; col < n; col++) {
        slate.push(col);
        depthFirstSearch(i + 1, n, slate);
        slate.pop();
      }
    }
  
    // Recursão baseada nos returns.
    depthFirstSearch(0, n, []);
    
    return {
        total: results.length,
        result: results.map(board => formatBoard(board))
    }
  };
  
  const formatBoard = board => {
    let result = [];
  
    for (let col = 0; col < board.length; col++) {
      let newRow = new Array(board.length).fill(0);
      newRow[board[col]] = 1;
      result.push(newRow.join(''));
    }
  
    return result;
  }
  
export default solveQueensBacktracking;

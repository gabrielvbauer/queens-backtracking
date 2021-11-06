const solveQueensBacktracking = (n) => {
    // global results
    const results = [];
     
    const depthFirstSearch = (i, n, slate) => {
      // backtracking case
      let lastQueen = i - 1;
  
      for (let prevQueen = 0; prevQueen < lastQueen; prevQueen++) {
        // if column has a conflict
        if (slate[prevQueen] === slate[lastQueen]) return;
  
        // if diagonal has a conflict 
        let rowDiff = Math.abs(prevQueen - lastQueen);
        let colDiff = Math.abs(slate[prevQueen] - slate[lastQueen]);
        if(rowDiff === colDiff) return;
      }
  
      // base case 
      if (i === n) {
        results.push(slate.slice());
        return;
      }
  
      // Depth-First Search recursive case
      for(let col = 0; col < n; col++) {
        slate.push(col);
        depthFirstSearch(i + 1, n, slate);
        slate.pop();
      }
    }
  
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

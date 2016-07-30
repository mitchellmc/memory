export function shuffle(array){
   var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


export function shuffledMemoryCardIds(highestCardId){
  const cardIds = []

  for(let i = 1; i <= highestCardId/2; i ++){
    cardIds.push(i);
    cardIds.push(i);
  }

  return shuffle(cardIds);
}


export function generateMemoryBoard(row, column){
    const memoryboard = [];
    const highestCardId = row * column;
    const shuffledCards = shuffledMemoryCardIds(highestCardId);

    for(let j = 0 ; j < row ; j++){
      let row = [];
      for(let k = 0; k < column; k++){
          row.push(
            {
                cardId: shuffledCards.pop(),
                status: 0,
            }
          );
      }
      memoryboard.push(row);
    }

  return memoryboard;
}

export function newBoard(board, row, column){

  const originalCell = board[row][column];

  const flippedCell = {
    ...originalCell,
    status: originalCell.status == 0 ? 1 : 0
  }

  const newRow = [
    ...board[row].slice(0, column),
    flippedCell,
    ...board[row].slice(column + 1)
  ]

  const newBoard = [
    ...board.slice(0, row),
    newRow,
    ...board.slice(row + 1)
  ];

  return newBoard;
};

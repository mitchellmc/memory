import {
  FACING_DOWN,
  FACING_UP,
  SOLVED,
} from './constants';

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


export function generateMemoryCardIds(highestCardId){
  const cardIds = []

  for(let i = 1; i <= highestCardId/2; i ++){
    cardIds.push(i);
    cardIds.push(i);
  }

  return cardIds;
}


export function generateMemoryBoard(row, column){
    const memoryboard = [];
    const highestCardId = row * column;
    const memoryCards = generateMemoryCardIds(highestCardId);
    const shuffledCards = shuffle(memoryCards);

    for(let j = 0 ; j < row ; j++){
      let row = [];
      for(let k = 0; k < column; k++){
          row.push(
            {
                cardId: shuffledCards.pop(),
                status: FACING_DOWN,
            }
          );
      }
      memoryboard.push(row);
    }

  return memoryboard;
}

export function updateBoard(board, row, column, status){

  const originalCell = board[row][column];

  const flippedCell = {
    ...originalCell,
    status: status
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


export function closeBoard(board, openCards){
  const firstBoard = updateBoard(board, openCards[0].row, openCards[0].column, FACING_DOWN);
  const secondBoard = updateBoard(firstBoard, openCards[1].row, openCards[1].column, FACING_DOWN);

  return secondBoard;
}

export function solveBoard(board, openCards){
  const firstBoard = updateBoard(board, openCards[0].row, openCards[0].column, SOLVED);
  const secondBoard = updateBoard(firstBoard, openCards[1].row, openCards[1].column, SOLVED);

  return secondBoard;
}

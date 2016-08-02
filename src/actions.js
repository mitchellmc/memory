import {
    SET_BOARD_6,
    SET_BOARD_12,
    SET_BOARD_16,
    SET_BOARD_20,
    SET_BOARD_30,
    TURN_CARD,
    CLEAR_OPEN_CARDS,
} from './constants';

export function testAction(messageText = 'haha') {
  console.log('testAction fired ');
  return {
    type: 'TEST',
    text: messageText,
  };
}

export function setMemoryBoard(dimensions = 6) {
  let typeToReturn = SET_BOARD_6;
  const typedDimension = Number(dimensions);

  switch (typedDimension) {
    case 6:
      typeToReturn = SET_BOARD_6;
      break;
    case 12:
      typeToReturn = SET_BOARD_12;
      break;
    case 16:
      typeToReturn = SET_BOARD_16;
      break;
    case 20:
      typeToReturn = SET_BOARD_20;
      break;
    case 30:
      typeToReturn = SET_BOARD_30;
      break;
    default:
      typeToReturn = SET_BOARD_6;
  }

  return {
    type: typeToReturn,
  };
}

export function turnCardInternal(row, column) {
  return {
    type: TURN_CARD,
    row,
    column,
  };
}

export function turnCard(row, column) {
  return (dispatch, getState) => {
    const { openCards } = getState();
    if (openCards.length === 2) {
      return;
    }

    dispatch(turnCardInternal(row, column));
  };
}

export function turnCardAsync(row, column) {
  return dispatch => {
    setTimeout(() => {
      dispatch(turnCard(row, column));
    }, 2000);
  };
}

export function clearOpenCards() {
  console.log('im clearing open cards!');
  return {
    type: CLEAR_OPEN_CARDS,
  };
}

export function evaluate() {
  return (dispatch, getState) => {
    const { openCards, memoryboard } = getState();

    console.log('ive got ', openCards.length, ' open cards');
    if (openCards.length === 2 &&
        (memoryboard[openCards[0].row][openCards[0].column].cardId
            === memoryboard[openCards[1].row][openCards[1].column].cardId)
      ) {
      console.log(
        'Matched',
        memoryboard[openCards[0].row][openCards[0].column].cardId,
        memoryboard[openCards[0].row][openCards[0].column].cardId
      );
      return;
    }

    if (openCards.length === 2 &&
        (memoryboard[openCards[0].row][openCards[0].column].cardId
            !== memoryboard[openCards[1].row][openCards[1].column].cardId)
    ) {
      console.log('No Match');
      dispatch(clearOpenCards());
    }
  };
}

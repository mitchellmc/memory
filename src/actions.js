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

export function turnCard(row, column) {
  return {
    type: TURN_CARD,
    row,
    column,
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
  return {
    type: CLEAR_OPEN_CARDS,
  };
}

export function turnCardAndEvaluateMatch(row, column) {
  return (dispatch, getState) => {
    const { openCards } = getState();
    let isMatch = false;

    if (openCards.length === 2) {
      return;
    }

    dispatch(turnCard(row, column));

    if (openCards.length === 2) {
      if (openCards[0].cardId === openCards[1].cardId) {
        isMatch = true;
      }

      if (isMatch) {
        console.log('Matched');
      } else {
        console.log('No Match');
        // this action will close up the current cards in on reducer
        // and it will remove everythig from the opencards array in another reducer
        dispatch(clearOpenCards());
      }
    }
  };
}

import {
    SET_BOARD_6,
    SET_BOARD_12,
    SET_BOARD_16,
    SET_BOARD_20,
    SET_BOARD_30,
    TURN_CARD,
    CLEAR_OPEN_CARDS,
    MATCH_OPEN_CARDS,
    GAME_FINISHED,
} from './constants';

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

export function clearOpenCards(openCards) {
  return {
    type: CLEAR_OPEN_CARDS,
    openCards,
  };
}

export function matchOpenCards(openCards) {
  return {
    type: MATCH_OPEN_CARDS,
    openCards,
  };
}

export function gameWonInternal() {
  return {
    type: GAME_FINISHED,
  };
}

export function gameWon() {
  return (dispatch, getState) => {
    const { score } = getState();
    if (score.matchedCards === score.size) {
      dispatch(gameWonInternal());
    }
  };
}

export function evaluateInternal() {
  return (dispatch, getState) => {
    const { openCards, memoryboard } = getState();

    if (openCards.length === 2 &&
        (memoryboard[openCards[0].row][openCards[0].column].cardId
            === memoryboard[openCards[1].row][openCards[1].column].cardId)
      ) {
      dispatch(matchOpenCards(openCards));
      setTimeout(() => {
        dispatch(gameWon());
      }, 945);
      return;
    }

    if (openCards.length === 2 &&
        (memoryboard[openCards[0].row][openCards[0].column].cardId
            !== memoryboard[openCards[1].row][openCards[1].column].cardId)
    ) {
      dispatch(clearOpenCards(openCards));
    }
  };
}

export function evaluate() {
  return dispatch => {
    setTimeout(() => {
      dispatch(evaluateInternal());
    }, 945);
  };
}

import {
    SET_BOARD_6,
    SET_BOARD_12,
    SET_BOARD_16,
    SET_BOARD_20,
    SET_BOARD_30,
    TURN_CARD,
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

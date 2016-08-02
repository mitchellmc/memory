import { combineReducers } from 'redux';
import { generateMemoryBoard, updateBoard, closeBoard } from './generator';
import {
  SET_BOARD_6,
  SET_BOARD_12,
  SET_BOARD_16,
  SET_BOARD_20,
  SET_BOARD_30,
  TURN_CARD,
  CLEAR_OPEN_CARDS,
} from './constants';

const memoryboard = (state = [], action) => {
  switch (action.type) {
    case SET_BOARD_6:
      return generateMemoryBoard(2, 3);
    case SET_BOARD_12:
      return generateMemoryBoard(3, 4);
    case SET_BOARD_16:
      return generateMemoryBoard(4, 4);
    case SET_BOARD_20:
      return generateMemoryBoard(4, 5);
    case SET_BOARD_30:
      return generateMemoryBoard(5, 6);
    case TURN_CARD:
      return updateBoard(state, action.row, action.column, 1);
    case CLEAR_OPEN_CARDS:
      return closeBoard(state, action.openCards);
    default:
      return generateMemoryBoard(2, 3);
  }
};

const openCards = (state = [], action) => {
  switch (action.type) {
    case TURN_CARD:
      return [
        ...state,
        {
          row: action.row,
          column: action.column,
        },
      ];
    case CLEAR_OPEN_CARDS:
      return [];
    default:
      return [];
  }
};

const memoryapp = combineReducers({
  memoryboard,
  openCards,
});

export default memoryapp;

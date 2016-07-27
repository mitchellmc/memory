import {
    SET_BOARD_6,
    SET_BOARD_12,
    SET_BOARD_16,
    SET_BOARD_20,
    SET_BOARD_30,
    TURN_CARD,
} from './constants';

export function testAction(messageText = 'haha'){
  console.log('testAction fired ');
  return {
      type: 'TEST',
      text: messageText,
  };
};

export function setMemoryBoard(dimensions = 6){
  let typeToReturn = SET_BOARD_6;

  if(dimensions == 12){
    typeToReturn = SET_BOARD_12;
  }else if(dimensions == 16){
    typeToReturn = SET_BOARD_16;
  }else if(dimensions == 20){
    typeToReturn = SET_BOARD_20;
  }else if(dimensions == 30){
    typeToReturn = SET_BOARD_30;
  }else{
    typeToReturn = SET_BOARD_6;
  }

  return {
      type: typeToReturn,
  };
};

export function turnCard(cardId){
  console.log('turning card');
  return {
    type: TURN_CARD,
    cardId,
  };
};

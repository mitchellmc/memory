import { combineReducers } from 'redux';
import { generateMemoryBoard } from './generator';

const memoryboard = (state = [], action) =>   {
  switch(action.type){
    default:
      return generateMemoryBoard(3,4);
  }
};

const memoryapp = combineReducers({
  memoryboard,
});

export default memoryapp;

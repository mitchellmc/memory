import { combineReducers } from 'redux'

const memoryboard = (state = [], action) =>   {
  switch(action.type){
    default:
      return [[1,3],[3,2],[5,6]];
  }
};

const memoryapp = combineReducers({
  memoryboard,
});

export default memoryapp;

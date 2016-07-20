import { combineReducers } from 'redux'

const memoryboard = (state = [], action) =>   {
  switch(action.type){
    default:
      return state;
  }
};

const memoryapp = combineReducers({
  memoryboard,
});

export default memoryapp;

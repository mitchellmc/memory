
export function testAction(messageText = 'haha'){
  console.log('testAction fired ');
  return {
      type: 'TEST',
      text: messageText,
  };
};

export function setMemoryBoard(dimensions = 6){
  return {
      type: 'SET_BOARD',
      dimensions,
  };
};

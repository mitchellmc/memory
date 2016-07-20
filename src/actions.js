
export function testAction(messageText = 'haha'){
  console.log('testAction fired ');
  return {
      type: 'TEST',
      text: messageText,
  };
};

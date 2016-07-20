import React, {PropTypes} from 'react';

class MemoryBoard extends React.Component {
  static propTypes = {
    memoryboard: PropTypes.array,
    testAction: PropTypes.func,
  };

  render(){
    return (
      <div>
        <h2>Memory Board</h2>
        <input
          id='test'
          name='test'
          type='button'
          value='test'
          onClick={() =>{
            this.props.testAction();
          }}
        />
      </div>
    );
  }
};

export default MemoryBoard;

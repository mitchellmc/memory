import React, {Component, PropTypes} from 'react';
import MemorySquare from './MemorySquare';

class MemoryBoard extends React.Component {
  static propTypes = {
    memoryboard: PropTypes.array,
    testAction: PropTypes.func,
  };

  // static defaultProps = {
  //   ...Component.defaultProps,
  //   memoryboard: [[1,3],[4,2],[5,6]],
  // };

  render(){

    const {
      memoryboard
    } = this.props;

    return (
      <div>
        <h2>Memory Board</h2>
        <input
          id='test'
          name='test'
          type='button'
          value='test'
          onClick={() =>{
            console.log(this.props.memoryboard)
            this.props.testAction();
          }}
        />
        {
          memoryboard.map((currentRow) => currentRow.map((currentCell) => <MemorySquare/>))
        }
      </div>
    );
  }
};

export default MemoryBoard;

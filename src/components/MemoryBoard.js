import React, {Component, PropTypes} from 'react';
import MemorySquare from './MemorySquare';

class MemoryBoard extends React.Component {
  static propTypes = {
    memoryboard: PropTypes.array,
    testAction: PropTypes.func,
  };

  render(){
    const {
      memoryboard
    } = this.props;

    return (
      <div>
        <h2>Memory Board</h2>
        <select onChange={(evt) =>{
          // console.log(evt.target.selectedIndex);
          console.log(evt.target.value);
        }}>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
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
          memoryboard.map((currentRow, item) =>
            currentRow.map((currentCell, item) =>
              <MemorySquare/>
            )
          )
        }
      </div>
    );
  }
};

export default MemoryBoard;

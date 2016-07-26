import React, {Component, PropTypes} from 'react';
import MemoryRow from './MemoryRow';

class MemoryBoard extends React.Component {
  static propTypes = {
    memoryboard: PropTypes.array,
    setMemoryBoard: PropTypes.func,
  };

  render(){
    const {
      memoryboard,
      setMemoryBoard,
    } = this.props;

    return (
      <div>
        <h2>Memory Board</h2>
        <select onChange={(evt) =>{
          setMemoryBoard(evt.target.value);
        }}>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        {
          memoryboard.map((currentRow, item) =>
            <MemoryRow
              key={item}
              row={currentRow}
            />
          )
        }
      </div>
    );
  }
};

export default MemoryBoard;

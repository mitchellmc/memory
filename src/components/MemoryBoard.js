import React, {Component, PropTypes} from 'react';
import MemoryRow from './MemoryRow';

class MemoryBoard extends React.Component {
  static propTypes = {
    memoryboard: PropTypes.array,
    setMemoryBoard: PropTypes.func,
    turnCard: PropTypes.func,
  };

  render(){
    const {
      memoryboard,
      setMemoryBoard,
      turnCard,
    } = this.props;

    return (
      <div>
        <h2>Memory Board</h2>

        <div className='board-selector'>
          <select onChange={(evt) =>{
            setMemoryBoard(evt.target.value);
          }}>
            <option value='6'>6 Squares</option>
            <option value='12'>12 Squares</option>
            <option value='16'>16 Squares</option>
            <option value='20'>20 Squares</option>
            <option value='30'>30 Squares</option>
          </select>
        </div>

        <div className='flex-container'>
          {
            memoryboard.map((currentRow, item) =>
              <MemoryRow
                key={item}
                row={currentRow}
                turnCard={turnCard}
              />
            )
          }
        </div>

      </div>
    );
  }
};

export default MemoryBoard;

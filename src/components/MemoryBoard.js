import React, {Component, PropTypes} from 'react';
import MemoryRow from './MemoryRow';
import css from '../main.css';

class MemoryBoard extends React.Component {
  static propTypes = {
    memoryboard: PropTypes.array,
    score: PropTypes.shape({
      tries: PropTypes.number,
      size: PropTypes.number,
      matchedCards: PropTypes.number,
    }),
    setMemoryBoard: PropTypes.func,
    turnCard: PropTypes.func,
    evaluate: PropTypes.func,
  };

  render(){
    const {
      memoryboard,
      score,
      setMemoryBoard,
      turnCard,
      evaluate,
    } = this.props;

    return (
      <div>
        <h2>Memory Board</h2>

        <div className='board-selector'>
          <select onChange={(evt) => {
            setMemoryBoard(evt.target.value);
          }}>
            <option value='6'>6 Squares</option>
            <option value='12'>12 Squares</option>
            <option value='16'>16 Squares</option>
            <option value='20'>20 Squares</option>
            <option value='30'>30 Squares</option>
          </select>
          <div className='score'>
             {(() => {
              if(score.gameFinished) {
                let calculatedScore = ((score.size/score.tries) * 1000);
                const roundedScore = Math.round(calculatedScore);
                return `Your score is ${roundedScore} !`
              }
            })()}
          </div>
        </div>

        <div className='flex-container'>
          {
            memoryboard.map((currentRow, item) =>
              <MemoryRow
                key={item}
                rowId={item}
                row={currentRow}
                turnCard={turnCard}
                evaluate={evaluate}
              />
            )
          }
        </div>

      </div>
    );
  }
};

export default MemoryBoard;

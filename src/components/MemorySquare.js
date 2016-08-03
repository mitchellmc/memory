import React, {PropTypes} from 'react';
import {
  FACING_DOWN,
  FACING_UP,
  SOLVED,
} from '../constants';
import classNames from 'classnames';

class MemorySquare extends React.Component {
  static propTypes = {
    columnId: PropTypes.number,
    rowId: PropTypes.number,
    square: PropTypes.shape({
      cardId: React.PropTypes.number,
      status: React.PropTypes.string
    }),
    turnCard: PropTypes.func,
    evaluate: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
  };

  render(){

    const {
      columnId,
      rowId,
      square,
      turnCardAndEvaluateMatch,
      turnCard,
      evaluate,
    } = this.props

    let colorStatus = classNames('flex-item', {solved: square.status === SOLVED} , {unsolved: square.status !== SOLVED})

    return(
      <div
        className={colorStatus}
        onClick={() => {
          console.log("my coords are ", rowId, columnId);
          if(square.status !== SOLVED){
            turnCard(rowId, columnId);
            evaluate();
          }
        }}
      >
        {
          (() => {
            if(square.status === FACING_UP){
              return square.cardId
            }else{
              return ''
            }
          })()
        }
      </div>
    );
  }
};

export default MemorySquare;

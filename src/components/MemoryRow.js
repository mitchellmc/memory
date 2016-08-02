import React, {Component, PropTypes} from 'react';
import MemorySquare from './MemorySquare';

class MemoryRow extends React.Component {
  static propTypes = {
    rowId: PropTypes.number,
    row: PropTypes.array,
    turnCard: PropTypes.func,
    evaluate: PropTypes.func,
  };

  render(){
    const {
      rowId,
      row,
      turnCard,
      evaluate,
    } = this.props;

    return (
      <div>
        {
          row.map((currentCell, item) =>
            <MemorySquare
              key={item}
              rowId={rowId}
              columnId={item}
              square={currentCell}
              turnCard={turnCard}
              evaluate={evaluate}
            />
          )
        }
        <br/>
      </div>
    );
  };

};

export default MemoryRow;

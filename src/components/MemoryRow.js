import React, {Component, PropTypes} from 'react';
import MemorySquare from './MemorySquare';

class MemoryRow extends React.Component {
  static propTypes = {
    row: PropTypes.array,
    turnCard: PropTypes.func,
  };

  render(){
    const {
      row,
      turnCard,
    } = this.props;

    return (
      <div>
        {
          row.map((currentCell, item) =>
            <MemorySquare
              key={item}
              cardId={currentCell}
              turnCard={turnCard}
            />
          )
        }
        <br/>
      </div>
    );
  };

};

export default MemoryRow;
